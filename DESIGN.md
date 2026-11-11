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
