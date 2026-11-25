#!/usr/bin/env bash
# Versionamento automático por branch.
#
# Cada branch versionada tem sua própria sequência de tags, para nunca conflitar:
#   main|master     -> v3.15.0            (bump gravado no package.json)
#   deploys/<nome>  -> <nome>/v1.4.2      (só tag e release; package.json intocado)
#
# Regras, a cada push:
#   1. Se um commit da branch (não merge, não "chore(release):") alterou a "version"
#      do package.json desde a última tag: versão MANUAL. Nada é calculado; a tag
#      recebe a versão que está no package.json.
#   2. Senão, bump pelos Conventional Commits desde a última tag:
#      feat!/BREAKING CHANGE -> major | feat -> minor | fix/refactor/perf/... -> patch.
#      chore/ci/docs/style/test e merges não contam; só isso no range = sem release.
#      Um indício explícito de patch (nome da branch "patch/**", inclusive a branch
#      de origem vista no merge da main, ou commit "patch:"/"[patch]") força o bump
#      para patch, mesmo que o range tenha "feat".
#   3. Sem tag ainda (bootstrap): tagueia a versão atual do package.json.
#
# RELEASE_COMMIT_BUMP=true grava a versão calculada no package.json via GraphQL
# createCommitOnBranch: commit assinado pelo GitHub, expectedHeadOid aborta se a branch
# andou. Nos repos da appbydev a branch padrão não tem ruleset, então o GITHUB_TOKEN do
# workflow basta. Se um ruleset passar a exigir PR, troque por um token de GitHub App que
# seja ator de bypass (o app "GitHub Actions" não é aceito) e use actions/create-github-app-token.
#
# Uso:
#   scripts/ci/release-version.sh compute   # só calcula e imprime
#   scripts/ci/release-version.sh apply     # compute + bump/tag/release (exige GH_TOKEN)
#
# Variáveis opcionais:
#   RELEASE_BRANCH       branch (padrão: GITHUB_REF_NAME ou branch atual)
#   RELEASE_COMMIT_BUMP  true|false, commitar o bump no package.json (padrão: false; o workflow liga na main)
#   RELEASE_NO_TYPES     tipos que não geram release (padrão: chore|ci|docs|style|test)
set -euo pipefail

cd "$(dirname "${BASH_SOURCE[0]}")/../.."

BRANCH="${RELEASE_BRANCH:-${GITHUB_REF_NAME:-$(git rev-parse --abbrev-ref HEAD)}}"
NO_TYPES="${RELEASE_NO_TYPES:-chore|ci|docs|style|test}"
REPO="${GITHUB_REPOSITORY:-$(git remote get-url origin | sed -E 's#.*[:/]([^/]+/[^/]+?)(\.git)?$#\1#')}"

case "$BRANCH" in
	main | master) PREFIX="v" ;;
	deploys/*) PREFIX="${BRANCH#deploys/}/v" ;;
	*) echo "Branch ${BRANCH} não é versionada (só main/master e deploys/**)" >&2; exit 64 ;;
esac
COMMIT_BUMP="${RELEASE_COMMIT_BUMP:-false}"

log() { printf '\n\033[1;34m[release]\033[0m %s\n' "$*"; }
warn() { printf '\n\033[1;33m[release] AVISO:\033[0m %s\n' "$*"; }
gh_output() { if [ -n "${GITHUB_OUTPUT:-}" ]; then echo "$1=$2" >> "$GITHUB_OUTPUT"; fi; }
gh_summary() { if [ -n "${GITHUB_STEP_SUMMARY:-}" ]; then printf '%s\n' "$1" >> "$GITHUB_STEP_SUMMARY"; fi; }

pkg_version_at() { git show "$1:package.json" | node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>console.log(JSON.parse(s).version))'; }
is_semver() { [[ "$1" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; }

# Commit (não merge, não de release) que mudou a "version" do package.json no range.
manual_version_commit() {
	local range="$1" c
	for c in $(git log --no-merges --format=%H "$range" -- package.json); do
		case "$(git log -1 --format=%s "$c")" in "chore(release):"*) continue ;; esac
		if [ "$(pkg_version_at "$c")" != "$(pkg_version_at "${c}^")" ]; then
			echo "$c"
			return 0
		fi
	done
	return 1
}

# Indício explícito de release de patch. Retorna 0 e imprime o motivo quando o nome
# da branch (patch/**) ou um commit do range indica patch; senão retorna 1.
#   - branch versionada: apenas em execuções fora da main/deploys (ex.: local);
#   - merges no range: a branch de origem ("Merge pull request #1 from owner/patch/x");
#   - commits: tipo conventional "patch" ou marcador "[patch]" no assunto.
patch_hint() {
	local range="$1" subject source
	case "$BRANCH" in
		patch | patch/* | */patch | */patch/*) echo "branch ${BRANCH}"; return 0 ;;
	esac
	while IFS= read -r subject; do
		source="${subject##* }" # "owner/branch"
		source="${source#*/}"   # remove o owner -> "branch" (pode conter "/")
		case "$source" in
			patch | patch/* | */patch | */patch/*) echo "merge de ${source}"; return 0 ;;
		esac
	done < <(git log --merges --format=%s "$range")
	if git log --no-merges --format=%s "$range" | grep -qE '^(patch(\([^)]*\))?!?: |\[patch\])'; then
		echo "commit com marcação de patch"
		return 0
	fi
	return 1
}

compute() {
	MODE="" VERSION="" TAG="" LAST_TAG="" BUMP="" REASON=""

	local current
	current="$(pkg_version_at HEAD)"
	is_semver "$current" || { echo "package.json version \"${current}\" não é semver X.Y.Z" >&2; exit 1; }

	LAST_TAG="$(git describe --tags --abbrev=0 --match "${PREFIX}[0-9]*" 2>/dev/null || true)"

	if [ -z "$LAST_TAG" ]; then
		MODE="manual"; VERSION="$current"; REASON="nenhuma tag ${PREFIX}* ainda: tagueia a versão atual do package.json"
	else
		local last_version="${LAST_TAG#"$PREFIX"}" range="${LAST_TAG}..HEAD" manual_commit=""
		manual_commit="$(manual_version_commit "$range" || true)"
		if [ -n "$manual_commit" ] && [ "$current" != "$last_version" ]; then
			MODE="manual"; VERSION="$current"; REASON="package.json alterado à mão em ${manual_commit:0:8} (${last_version} -> ${current}): versão manual respeitada"
		else
			local subjects bodies releasing hint
			subjects="$(git log --no-merges --format=%s "$range")"
			bodies="$(git log --no-merges --format=%B "$range")"
			hint="$(patch_hint "$range" || true)"
			releasing="$(echo "$subjects" | grep -vE "^(${NO_TYPES})(\([^)]*\))?: " | grep -v '^$' || true)"
			if [ -z "$releasing" ] && [ -z "$hint" ]; then
				MODE="skip"; REASON="nenhum commit que gere release desde ${LAST_TAG} (só ${NO_TYPES//|/, } ou merges)"
			else
				local major minor patch
				IFS=. read -r major minor patch <<< "$last_version"
				if echo "$subjects" | grep -qE '^[a-z]+(\([^)]*\))?!: ' || echo "$bodies" | grep -q 'BREAKING CHANGE'; then
					BUMP="major"; major=$((major + 1)); minor=0; patch=0
					REASON="bump major pelos commits desde ${LAST_TAG}"
				elif [ -n "$hint" ]; then
					BUMP="patch"; patch=$((patch + 1))
					REASON="bump patch por ${hint} desde ${LAST_TAG}"
				elif echo "$subjects" | grep -qE '^feat(\([^)]*\))?: '; then
					BUMP="minor"; minor=$((minor + 1)); patch=0
					REASON="bump minor pelos commits desde ${LAST_TAG}"
				else
					BUMP="patch"; patch=$((patch + 1))
					REASON="bump patch pelos commits desde ${LAST_TAG}"
				fi
				MODE="auto"; VERSION="${major}.${minor}.${patch}"
			fi
		fi
	fi

	if [ "$MODE" != "skip" ]; then
		TAG="${PREFIX}${VERSION}"
		if git rev-parse -q --verify "refs/tags/${TAG}" >/dev/null 2>&1; then
			warn "A tag ${TAG} já existe; nada a publicar"
			MODE="skip"; REASON="tag ${TAG} já existe"
		fi
	fi

	log "branch=${BRANCH} modo=${MODE} versão=${VERSION:--} tag=${TAG:--} última=${LAST_TAG:-nenhuma} bump-no-package.json=${COMMIT_BUMP}"
	echo "  ${REASON}"
	gh_output mode "$MODE"; gh_output version "$VERSION"; gh_output tag "$TAG"; gh_output last_tag "$LAST_TAG"; gh_output bump "$BUMP"
	case "$MODE" in
		manual) gh_summary "- 🏷️ Versão **manual** \`${TAG}\`: ${REASON}" ;;
		auto) gh_summary "- 🏷️ Versão **automática** \`${TAG}\` (${BUMP}): ${REASON}" ;;
		skip) gh_summary "- ⏭️ Sem release: ${REASON}" ;;
	esac
}

# Commit do bump via GraphQL createCommitOnBranch: assinado pelo GitHub e com
# expectedHeadOid, que aborta se a branch andou nesse meio tempo.
commit_bump() {
	local head_oid="$1" oid_file
	oid_file="$(mktemp)"
	node -e '
		const fs = require("fs")
		const raw = fs.readFileSync("package.json", "utf8")
		const next = raw.replace(/("version":\s*")[^"]+(")/, `$1${process.argv[1]}$2`)
		if (next === raw) { console.error("campo version não encontrado no package.json"); process.exit(1) }
		fs.writeFileSync("package.json", next)
	' "$VERSION"
	[ "$(pkg_version_at HEAD)" != "$VERSION" ] || { echo "package.json já estava em ${VERSION}" >&2; exit 1; }

	local query='mutation($repo:String!,$branch:String!,$oid:GitObjectID!,$msg:String!,$pkg:Base64String!){
		createCommitOnBranch(input:{
			branch:{repositoryNameWithOwner:$repo, branchName:$branch},
			expectedHeadOid:$oid,
			message:{headline:$msg},
			fileChanges:{additions:[{path:"package.json", contents:$pkg}]}
		}){ commit { oid } }
	}'
	node -e '
		const fs = require("fs")
		const [query, repo, branch, oid, msg] = process.argv.slice(1)
		const pkg = fs.readFileSync("package.json").toString("base64")
		process.stdout.write(JSON.stringify({ query, variables: { repo, branch, oid, msg, pkg } }))
	' "$query" "$REPO" "$BRANCH" "$head_oid" "chore(release): ${TAG}" \
		| gh api graphql --input - --jq '.data.createCommitOnBranch.commit.oid' > "$oid_file" || { git checkout -- package.json; return 1; }

	# O commit remoto já tem o bump; descarta a edição local para o checkout poder dar fast-forward depois.
	git checkout -- package.json
	cat "$oid_file"
}

apply() {
	compute
	[ "$MODE" != "skip" ] || return 0
	: "${GH_TOKEN:?GH_TOKEN é obrigatório para apply}"

	local sha
	sha="$(git rev-parse HEAD)"
	if [ "$MODE" = "auto" ] && [ "$COMMIT_BUMP" = "true" ]; then
		log "Commitando bump ${VERSION} no package.json de ${BRANCH}"
		sha="$(commit_bump "$sha")"
		[ -n "$sha" ] || { echo "createCommitOnBranch não retornou oid" >&2; exit 1; }
		gh_summary "- 📝 Commit \`chore(release): ${TAG}\` → \`${sha:0:8}\`"
	fi

	log "Criando tag ${TAG} em ${sha:0:8}"
	gh api "repos/${REPO}/git/refs" -f ref="refs/tags/${TAG}" -f sha="$sha" > /dev/null

	log "Publicando release ${TAG}"
	local notes_args=(--generate-notes)
	[ -z "$LAST_TAG" ] || notes_args+=(--notes-start-tag "$LAST_TAG")
	gh release create "$TAG" --repo "$REPO" --target "$sha" --title "$TAG" "${notes_args[@]}"
	gh_output sha "$sha"
	gh_summary "- 🚀 Release [${TAG}](https://github.com/${REPO}/releases/tag/${TAG}) publicada"
}

case "${1:-}" in
	compute) compute ;;
	apply) apply ;;
	*) echo "Uso: $0 <compute|apply>" >&2; exit 64 ;;
esac
