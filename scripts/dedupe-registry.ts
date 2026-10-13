import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
const manifestPath = new URL('../src/icon-manifest.json', import.meta.url);
const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
manifest.icons = [...new Set(manifest.icons)].sort();
writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
const names = readdirSync(new URL('../src/icons', import.meta.url)).filter(file => file.endsWith('.tsx')).map(file => file.slice(0, -4)).sort();
const imports = names.map((name, index) => `import Icon${index} from './icons/${name}';`).join('\n');
const entries = names.map((name, index) => `  ${JSON.stringify(name)}: Icon${index},`).join('\n');
writeFileSync(new URL('../src/icon-registry.ts', import.meta.url), `${imports}\n\nimport type { IconSvg } from './icon-runtime';\n\nexport const iconRegistry = {\n${entries}\n} satisfies Record<string, IconSvg>;\n`);
