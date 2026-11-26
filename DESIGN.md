# bylucide (demo Catálogo): contrato de design (Rodada 2)

Complementa `../DESIGN-FAMILY.md` e `../DESIGN-ROUND2.md`. O produto é a tinta: o ícone é o herói.

## Personalidade

Escopada por `[data-app="catalogo"]` em `demo/src/style.css`. A família de componentes é a mesma do bydesk (shadcn), mas o demo não usa `ui/*`: as classes são próprias do demo.

| Item | Valor |
|---|---|
| Personalidade | Editorial, o ícone é o herói |
| Raio | 0.5rem (controles), 0.75rem (amostras), 1.25rem (cartão do hero) |
| Superfície / sombra | grade sem borda (`--cat-tile-border: 0`), fundo `--muted`; sem sombra no cartão |
| Densidade | controle 2.75rem; busca 3rem |
| Botão / input | botão sólido `--cat-accent` (`oklch(0.42 0.04 280)`, tinta índigo), texto `--cat-accent-ink`; busca 3rem |
| Seleção | `.segmented button.selected` e `.filters button.active` usam `--cat-accent` |
| Assinatura | traço de pulso (SVG, `pulse-draw` 1.6s) no hero, ícone amplia no hover (`--cat-glyph-scale` 1.15) |

Movimento: `prefers-reduced-motion` desliga o traço (`stroke-dashoffset: 0`) e a animação do pulso.

## Imagens e ícones

- Ícones: `bylucide` (Lucide React), uma lib só, sem misturar.
- Sem imagens externas. O pulso é SVG próprio.

## Referências (origem e licença)

- **tweakcn** (temas `violet-bloom`, `ocean-breeze`, `amber-minimal`, mesma fonte do bydesk). Usado só como ponto de partida de raio e sombra. **Licença: Apache License 2.0** (LICENSE de `https://github.com/jnsahaj/tweakcn`, branch `main`, verificado em 2026-11-11).
- Magic UI, Aceternity, Cult UI e shadcn blocks: não lidos nesta rodada. Nenhum código copiado.

## Limitações conhecidas

- O demo tem `dist/` versionado. O build desta rodada foi revertido com `git checkout -- demo/dist` e `git clean`, então o diff contém só `demo/index.html`, `demo/src/App.tsx` e `demo/src/style.css`.

## Rodada 4 (unslop): auditoria e direção

Leitura honesta: **slop leve**. A demo já tinha sido limpa na branch `feat/demo-unslop`. Modo polimento: corrigir só o que a auditoria achou, manter paleta, tipo, layout e a assinatura do pulso.

### Auditoria (antes)
Auditor `.r2/r4/slop-audit.mjs` em `/`, claro/escuro, 1440/390: 1 erro e 2 avisos por combinação.
- `demo/src/App.tsx:283` `©` no rodapé conta como emoji (erro do auditor) e é ruído; o crédito ao Lucide fica sem ele.
- `byui` tabs `p-[3px]` herdado na lista de categorias (`demo/src/style.css:195`): padding fora da grade de 4px.
- `demo/src/App.tsx:252` contagem `1698` sem separador ao lado de `1,698` no título e no hero: dois formatos de número na mesma tela.
- `demo/src/App.tsx:240` modo de movimento selecionado como bloco preto cheio (`bg-primary`): o seletor pesa mais que a busca e que o ícone do hero. Seleção deve ser um degrau de superfície, igual aos ícones do cartão do hero (`App.tsx:168`).
- `demo/src/style.css:195` linha da lista de categorias termina no fim das abas (`w-fit`), não na largura da grade: a borda parece cortada.
- `demo/src/App.tsx:133-141` título "Icons with a pulse" é slogan; não diz que é Lucide nem React. Subtítulo diz "before you ship it", frase de marketing.
- `demo/src/App.tsx:145` "Browse the collection": rótulo longo para uma âncora.
- `demo/src/App.tsx:219-225` caixa "Motion preview" com h3 + texto em painel cinza: um card a mais entre a busca e a grade; texto de "Always" fala de "Reduced-motion preferences", jargão.
- `demo/src/style.css:96` `letter-spacing: -0.035em` no título, abaixo do limite de -0.03em.
- `demo/src/App.tsx:268` título do vazio com `font-semibold` em 24px num lugar que não pede ênfase.

### Direção
- **Produto.** Um catálogo para achar, ver mexer e copiar o nome de 1.698 ícones Lucide animados para React.
- **Caráter.** Exato, tipográfico, um pouco vivo.
- **Mundo.** Um mostruário de tipos móveis: folha clara, tinta preta, cada peça numa casa da gaveta.
- **Momentos.** O cartão-amostra do hero (ícone grande em loop + o código que o gera) e o ícone que amplia e se mexe ao passar na casa da grade.
- **Assinatura.** O traço de pulso desenhado uma vez sob o título. Só ali.
