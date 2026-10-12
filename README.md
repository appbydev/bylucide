# ByLucide

Biblioteca interna de componentes React para ícones Lucide, com 590 implementações animadas locais e fallback estático do `lucide-react` para nomes disponíveis nele. A API inclui componentes nomeados, seleção dinâmica por nome e tipos TypeScript.

## Sumário

- [Requisitos](#requisitos)
- [Preparação e consumo local](#preparação-e-consumo-local)
- [Início rápido](#início-rápido)
- [API e propriedades](#api-e-propriedades)
- [Animação e acessibilidade](#animação-e-acessibilidade)
- [Catálogo, aliases e criação de componentes](#catálogo-aliases-e-criação-de-componentes)
- [Desenvolvimento](#desenvolvimento)
- [Limites conhecidos](#limites-conhecidos)

## Requisitos

- React e React DOM **18 ou superior** no projeto consumidor (dependências peer).
- Ambiente capaz de consumir módulos ESM e componentes React; para desenvolver e executar os scripts deste repositório, use Bun. O build utiliza `tsup` e TypeScript.
- `lucide-react` e `motion` são dependências declaradas pela biblioteca. Ao integrar por caminho local, configure o projeto consumidor para resolvê-las e evitar instâncias duplicadas de React.

## Preparação e consumo local

Na raiz deste repositório:

```sh
bun install
bun run build
```

O build cria `dist/index.js` (ESM) e `dist/index.d.ts`. Em uma aplicação local, aponte o import para esse arquivo **após o build**. Por exemplo, se as pastas estiverem dispostas como `workspace/bylucide` e `workspace/app/src`, a partir de um arquivo em `app/src`:

```tsx
import { ArrowDownIcon } from '../../bylucide/dist/index.js';

export function Exemplo() {
  return <ArrowDownIcon aria-label="Descer" />;
}
```

Ajuste o caminho ao seu layout; garanta que o bundler da aplicação consiga resolver as dependências da biblioteca no uso por caminho local. Não há instrução de publicação ou instalação via registro npm aqui.

## Início rápido

Nos exemplos seguintes, substitua `../../bylucide/dist/index.js` pelo caminho local correspondente à aplicação:

```tsx
import { ArrowDownIcon, Icon } from '../../bylucide/dist/index.js';

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

`ArrowDownIcon` é um export nomeado animado; `<Icon name="..." />` resolve o nome em tempo de execução. `calendar` é um exemplo de fallback para ícone estático do `lucide-react`, sem versão animada no catálogo local.

## API e propriedades

`IconProps` é exportado como tipo. Todos os componentes recebem as propriedades abaixo, além dos atributos HTML válidos para um `span` (incluindo `className`, `style`, eventos e atributos `aria-*`). `createIcon` produz componentes com as mesmas propriedades, exceto `name`.

| Propriedade | Tipo | Padrão | Efeito |
| --- | --- | --- | --- |
| `name` | `string` | `''` em `Icon` | Nome do ícone; use nomes do catálogo, aliases ou um nome resolvível por `lucide-react`. Nos componentes nomeados, o nome já está definido. |
| `size` | `number` | `24` | Tamanho passado ao SVG. |
| `color` | `string` | não definido | Cor passada ao SVG e aplicada ao `span`; sem valor, segue o estilo herdado do contexto. |
| `strokeWidth` | `number` | `2` | Espessura do traço passada ao SVG. |
| `loop` | `'hover' \| 'always' \| false` | `'hover'` | Controla a repetição da animação, quando houver implementação animada. |
| `ref` | `React.Ref<HTMLSpanElement>` | não definido | Referência ao `span` externo, não ao SVG. |

O elemento renderizado é um `span` com `display: inline-flex`, `vertical-align: middle` e `data-icon` com o nome normalizado. Eventos `onMouseEnter` e `onMouseLeave` fornecidos pelo consumidor são chamados junto com o controle interno do hover. Se nenhum SVG local ou estático puder ser resolvido, o componente retorna `null` (não cria `span`).

## Animação e acessibilidade

- `loop="hover"` (padrão): repete enquanto o ponteiro estiver sobre o `span`; ao sair, interrompe e retorna ao estado normal.
- `loop="always"`: repete enquanto o ícone estiver montado e apto a animar.
- `loop={false}`: não inicia a animação; exibe a geometria do ícone. Para ícones estáticos de fallback, `loop` não produz animação.

Sem `aria-label` ou `aria-labelledby`, o `span` é decorativo por padrão (`aria-hidden="true"`). Com um desses atributos, recebe `role="img"` por padrão e deixa de ser ocultado, salvo se você informar `aria-hidden` ou `role` explicitamente. Para um ícone que transmite significado, forneça um nome acessível; ao lado de texto que já comunica a ação, mantenha-o decorativo:

```tsx
<button type="button">
  <ArrowDownIcon aria-hidden="true" /> Baixar
</button>
<Icon name="plane" aria-label="Avião" />
```

Quando `prefers-reduced-motion: reduce` está ativo, o runtime não inicia a animação e usa o componente estático do `lucide-react` se existir. Quando não há equivalente estático, conserva a geometria local sem iniciar a animação. A preferência é observada também quando muda durante o uso.

## Catálogo, aliases e criação de componentes

`src/icon-manifest.json` é exportado como `manifest`. `manifest.icons` é uma lista dos **590 nomes canônicos**; `manifest.aliases` mapeia grafias alternativas para nomes canônicos. A quantidade pode ser consultada com `manifest.icons.length`. Para consultar o catálogo completo, use [`src/icon-manifest.json`](src/icon-manifest.json) e os exports em [`src/icon-exports.ts`](src/icon-exports.ts).

`normalizeName` aceita nomes como `arrow-down`, `ArrowDown` e `arrowDown`, além do sufixo `Icon`; aplica aliases conhecidos, mas **não verifica se o nome existe**. `createIcon(name)` cria um componente com nome predefinido e `ref` para o `span`; não adiciona um novo SVG ao catálogo. Exemplos reais:

```tsx
import { Icon, createIcon, manifest, normalizeName } from '../../bylucide/dist/index.js';
import type { IconProps } from '../../bylucide/dist/index.js';

const PlaneIcon = createIcon('airplane'); // alias de "plane"
const canonical = normalizeName('ArrowDownIcon'); // "arrow-down"
const numeric = normalizeName('arrow-down01'); // "arrow-down-0-1"
const available = manifest.icons.includes(canonical); // true
const alias = manifest.aliases.airplane; // "plane"

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

## Desenvolvimento

Execute na raiz:

```sh
bun run typecheck  # checagem TypeScript sem emitir arquivos
bun test           # testes com Bun
bun run build      # ESM e declarações em dist/
```

Arquivos principais:

| Caminho | Finalidade |
| --- | --- |
| `src/index.tsx`, `src/types.ts` | API pública e contrato das propriedades. |
| `src/icon-runtime.tsx`, `src/icon-factory.tsx` | Renderização, animação, fallback e criação de componentes. |
| `src/icon-exports.ts`, `src/icon-registry.ts`, `src/icons/` | Exports nomeados, registro e módulos locais de ícones. |
| `src/icon-manifest.json` | Lista de ícones e aliases. |
| `src/index.test.tsx` | Testes de catálogo, comportamento e renderização. |

O build utiliza os módulos locais em `src/icons/`; não requer clonagem de outros repositórios nem geração dos ícones durante a instalação.

## Limites conhecidos

- Nem todo nome de `lucide-react` tem animação local; o fallback estático depende de existir um export correspondente na versão instalada de `lucide-react`. Nomes não resolvidos não exibem marcador de erro: renderizam `null`.
- O hover é acionado por entrada e saída do **ponteiro** (`onMouseEnter`/`onMouseLeave`); não há gatilho próprio por foco de teclado ou toque. Evite depender da animação para transmitir informação essencial.
- Os testes cobrem catálogo e renderização, mas não substituem a inspeção visual e de comportamento dos 590 ícones em navegadores reais. Algumas animações têm repetição infinita interna; o runtime interrompe controles ao encerrar um ciclo de hover ou desmontar.
- O registro importa os módulos locais e o runtime importa o conjunto de ícones do `lucide-react`; não presuma redução garantida do pacote final ao importar apenas um componente nomeado.
