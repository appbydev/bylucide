# API do bylucide

Referência completa da biblioteca. O resumo e a instalação estão no [README](../README.md).

## Início rápido

```tsx
import { ArrowDownIcon, Icon } from 'bylucide';

export function Acoes() {
  return (
    <div>
      <button type="button">
        <ArrowDownIcon aria-hidden="true" /> Baixar
      </button>
      <Icon name="plane" aria-label="Avião" loop="always" size={32} />
      <Icon name="calendar" aria-label="Calendário" loop={false} />
    </div>
  );
}
```

`ArrowDownIcon` é um export nomeado animado; `<Icon name="..." />` resolve o nome em tempo de execução. Com `loop={false}`, o ícone aparece parado.

No consumo por caminho local, sem instalar pelo git, importe o build direto (por exemplo `../../bylucide/dist/index.js` a partir de `app/src`, com as pastas `workspace/bylucide` e `workspace/app`). Rode `bun run build` antes e garanta que o bundler da aplicação resolva um React só.

## API e propriedades

`IconProps` é exportado como tipo. Todos os componentes recebem as propriedades abaixo, além das propriedades do `lucide-react` e dos atributos válidos para um `svg` (incluindo `className`, `style`, eventos e atributos `aria-*`). `createIcon` produz componentes com as mesmas propriedades, exceto `name`.

| Propriedade | Tipo | Padrão | Efeito |
| --- | --- | --- | --- |
| `name` | `string` | `''` em `Icon` | Nome do ícone; use nomes do catálogo, aliases ou um nome resolvível por `lucide-react`. Nos componentes nomeados, o nome já está definido. |
| `size` | `number \| string` | `24` | Largura e altura do SVG. |
| `color` | `string` | `'currentColor'` | Cor do traço; por padrão segue a cor do texto. |
| `strokeWidth` | `number \| string` | `2` | Espessura do traço. `absoluteStrokeWidth` mantém a espessura independente do `size`. |
| `loop` | `'hover' \| 'always' \| false` | `'hover'` | Controla a repetição da animação, quando houver implementação animada. |
| `reducedMotion` | `'system' \| 'ignore'` | `'system'` | Respeita `prefers-reduced-motion: reduce` por padrão; `'ignore'` força a animação (use só em demos). |
| `trigger` | `'parent' \| 'self'` | `'parent'` | Com `loop="hover"`, quem dispara a animação: o controle interativo mais próximo (botão, link, item de menu, opção de select, aba, `[data-icon-trigger]`) no hover com mouse e no foco por teclado, ou só o próprio ícone. |
| `ref` | `React.Ref<SVGSVGElement>` | não definido | Referência ao `svg` renderizado. |

O elemento renderizado é o próprio `svg`, com as classes `lucide lucide-<nome>` e `data-icon` com o nome normalizado. Eventos `onMouseEnter` e `onMouseLeave` fornecidos pelo consumidor são chamados junto com o controle interno do hover. Se nenhum SVG local ou estático puder ser resolvido, o componente retorna `null`.

## Animação e acessibilidade

- `loop="hover"` (padrão): repete enquanto o controle pai estiver em hover (mouse ou caneta, nunca toque) ou com foco visível de teclado; ao sair, interrompe e retorna ao estado normal. Controles desabilitados não animam. Sem controle pai, reage ao ponteiro sobre o próprio ícone. `data-icon-trigger` em qualquer ancestral o torna o gatilho; `data-icon-trigger="self"` desliga o gatilho pelo pai naquele trecho.
- `loop="always"`: repete enquanto o ícone estiver montado, visível na tela e apto a animar.
- `loop={false}`: não inicia a animação; exibe a geometria do ícone. Para ícones estáticos de fallback, `loop` não produz animação.

Sem `aria-label` ou `aria-labelledby`, o ícone é decorativo por padrão (`aria-hidden="true"`). Com um desses atributos, recebe `role="img"` por padrão e deixa de ser ocultado, salvo se você informar `aria-hidden` ou `role` explicitamente. Para um ícone que transmite significado, forneça um nome acessível; ao lado de texto que já comunica a ação, mantenha-o decorativo:

```tsx
<button type="button">
  <ArrowDownIcon aria-hidden="true" /> Baixar
</button>
<Icon name="plane" aria-label="Avião" />
```

**Acessibilidade:** por padrão (`reducedMotion="system"`), quando `prefers-reduced-motion: reduce` está ativo, o runtime não inicia a animação e usa o componente estático do `lucide-react` se existir; sem equivalente estático, conserva a geometria local parada. A preferência é observada quando muda durante o uso. `reducedMotion="ignore"` força a animação e serve só para vitrines como o demo.

## Catálogo, aliases e criação de componentes

`src/icon-manifest.json` é exportado como `manifest`. `manifest.icons` é uma lista dos **1.698 nomes canônicos**; `manifest.aliases` mapeia grafias alternativas para nomes canônicos. A quantidade pode ser consultada com `manifest.icons.length`. Para consultar o catálogo completo, use [`src/icon-manifest.json`](../src/icon-manifest.json) e os exports em [`src/icon-exports.ts`](../src/icon-exports.ts).

Todos os 6.411 exports de componentes do `lucide-react@1.55.0` são oferecidos pelo wrapper: `House`, `HouseIcon`, `LucideHouse` e aliases oficiais como `Home`, `Loader2`, `Code2` e `MoreHorizontal`. Os 14 ícones Lucide históricos removidos upstream (principalmente marcas) continuam disponíveis com suas animações locais. Não há aliases Iconoir.

`normalizeName` aceita nomes oficiais PascalCase, variantes `Icon`/`Lucide` e suas grafias kebab-case; aliases apontam para a implementação animada local quando disponível. Nomes desconhecidos permanecem inalterados e `Icon` renderiza `null`. Não aceita sinônimos arbitrários como `airplane`, `attach-file` ou `key-circle`. `createIcon(name)` cria um componente com nome predefinido e `ref` para o `svg`; não adiciona um novo SVG ao catálogo.

Tipos públicos: `IconProps` para o seletor dinâmico, `NamedIconProps` e `IconComponent` para exports nomeados. `LucideProps` e `LucideIcon` são aliases de migração para esses tipos **do bylucide**, não o contrato do pacote upstream. Sem suporte React Native.

Exemplos:

```tsx
import { Icon, createIcon, manifest, normalizeName } from 'bylucide';
import type { IconProps } from 'bylucide';

const PlaneIcon = createIcon('Plane'); // nome Lucide "plane"
const canonical = normalizeName('ArrowDownIcon'); // "arrow-down"
const numeric = normalizeName('ArrowDown01'); // "arrow-down-0-1"
const available = manifest.icons.includes(canonical); // true
const alias = manifest.aliases.house; // "home" (implementação animada local)

export function Catalogo({ name }: { name: IconProps['name'] }) {
  return (
    <div>
      <PlaneIcon aria-label="Avião" />
      <Icon name={name ?? 'arrow-down'} aria-label="Ícone selecionado" />
    </div>
  );
}
```

Para entradas de usuários, valide o nome antes de depender de sua presença. `Icon` procura primeiro uma implementação animada local; na ausência dela, tenta o nome correspondente em `lucide-react`. Se ambos falharem, renderiza `null`. O manifesto cobre o catálogo **animado local**, não todos os nomes estáticos aceitos pelo fallback.

## Limites conhecidos

- Nem todo nome de `lucide-react` tem animação local; o fallback estático depende de existir um export correspondente na versão de `lucide-react` embutida no build. Nomes não resolvidos não exibem marcador de erro: renderizam `null`.
- No toque não há animação por hover; o foco por teclado só dispara quando é visível (`:focus-visible`). Evite depender da animação para transmitir informação essencial.
- Os testes cobrem catálogo e renderização, mas não substituem a inspeção visual e de comportamento dos 1.698 ícones em navegadores reais. Algumas animações têm repetição infinita interna; o runtime interrompe controles ao encerrar um ciclo de hover ou desmontar.
- O registro importa os módulos locais e o runtime importa o conjunto de ícones do `lucide-react`; não presuma redução garantida do pacote final ao importar apenas um componente nomeado.
