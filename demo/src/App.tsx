import { ArrowDownIcon, ArrowUpRightIcon, Icon, manifest, SearchIcon, XIcon } from 'bylucide';
import { Button } from 'byui/button';
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from 'byui/empty';
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from 'byui/input-group';
import { Slider } from 'byui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'byui/tabs';
import { ToggleGroup, ToggleGroupItem } from 'byui/toggle-group';
import { type CSSProperties, memo, useEffect, useMemo, useRef, useState } from 'react';

type Motion = 'hover' | 'always' | 'off';
const groups: [string, ...string[]] = ['All icons', 'Arrows', 'Interface', 'Media', 'Nature', 'People', 'Objects'];
const belongs: Record<string, string[]> = {
  Arrows: ['arrow', 'chevron', 'corner', 'move', 'rotate', 'undo', 'redo', 'turn', 'triangle'],
  Interface: ['align', 'menu', 'search', 'settings', 'layout', 'panel', 'filter', 'check', 'x-', 'plus', 'minus'],
  Media: ['audio', 'play', 'pause', 'volume', 'video', 'camera', 'image', 'music', 'mic'],
  Nature: ['leaf', 'flower', 'tree', 'sun', 'moon', 'cloud', 'wind', 'droplet', 'mountain', 'bird'],
  People: ['user', 'person', 'baby', 'heart', 'smile', 'hand', 'accessibility'],
  Objects: ['book', 'briefcase', 'box', 'car', 'clock', 'cup', 'gift', 'home', 'lightbulb', 'key'],
};
// Tab values become element ids, so they carry no spaces.
const slug = (group: string) => group.toLowerCase().replace(/\s+/g, '-');
const motionModes: { value: Motion; label: string }[] = [
  { value: 'hover', label: 'On hover' },
  { value: 'always', label: 'Always' },
  { value: 'off', label: 'Off' },
];
// Real icons from the set, shown in the hero. Hover or focus one to preview it, select it to enlarge it.
const featured: [string, ...string[]] = ['heart-pulse', 'bell', 'send', 'settings', 'audio-lines', 'rocket'];

const visibilityListeners = new Map<Element, (visible: boolean) => void>();
let visibilityObserver: IntersectionObserver | undefined;

function observeVisibility(element: Element, listener: (visible: boolean) => void) {
  if (typeof IntersectionObserver === 'undefined') {
    listener(true);
    return;
  }
  visibilityObserver ??= new IntersectionObserver((entries) => {
    for (const entry of entries) visibilityListeners.get(entry.target)?.(entry.isIntersecting);
  });
  visibilityListeners.set(element, listener);
  visibilityObserver.observe(element);
  return () => {
    visibilityObserver?.unobserve(element);
    visibilityListeners.delete(element);
    if (!visibilityListeners.size) {
      visibilityObserver?.disconnect();
      visibilityObserver = undefined;
    }
  };
}

// The whole tile is the button, so bylucide animates its icon on hover and keyboard focus of the tile.
const IconTile = memo(function IconTile({ name, motion }: { name: string; motion: Motion }) {
  const tile = useRef<HTMLButtonElement>(null);
  const timer = useRef<number>(0);
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    setVisible(false);
    if (motion === 'always' && tile.current) return observeVisibility(tile.current, setVisible);
  }, [motion]);
  useEffect(() => () => window.clearTimeout(timer.current), []);
  const loop = motion === 'hover' ? 'hover' : motion === 'always' && visible ? 'always' : false;
  const copy = () => {
    navigator.clipboard?.writeText(name).then(
      () => {
        setCopied(true);
        window.clearTimeout(timer.current);
        timer.current = window.setTimeout(() => setCopied(false), 1600);
      },
      () => {},
    );
  };
  return (
    <button ref={tile} type="button" className="tile" data-copied={copied || undefined} aria-label={`Copy ${name}`} onClick={copy}>
      <span className="glyph">
        <Icon name={name} loop={loop} reducedMotion={motion === 'always' ? 'system' : 'ignore'} />
      </span>
      <span className="icon-name">{name}</span>
      <span className="copy-label" aria-hidden="true">
        {copied ? 'Copied' : 'Copy'}
      </span>
    </button>
  );
});

const IconGrid = memo(function IconGrid({ icons, motion }: { icons: string[]; motion: Motion }) {
  return (
    <div className="grid">
      {icons.map((name) => (
        <IconTile key={name} name={name} motion={motion} />
      ))}
    </div>
  );
});

function App() {
  const [query, setQuery] = useState('');
  const [group, setGroup] = useState('All icons');
  const [motion, setMotion] = useState<Motion>('hover');
  const [size, setSize] = useState(28);
  const [specimen, setSpecimen] = useState<string>(featured[0]);
  const icons = useMemo(
    () =>
      (manifest.icons as string[]).filter(
        (name) => name.includes(query.trim().toLowerCase()) && (group === 'All icons' || belongs[group]?.some((word) => name.includes(word))),
      ),
    [query, group],
  );
  const total = (manifest.icons as string[]).length;
  const clear = () => {
    setQuery('');
    setGroup('All icons');
  };
  return (
    <>
      <header className="border-b">
        <div className="shell flex min-h-16 items-center justify-between">
          <a className="font-heading text-xl font-semibold tracking-tight text-foreground no-underline" href={import.meta.env.BASE_URL}>
            ByLucide
          </a>
          <a className="link" href="https://github.com/appbydev/bylucide" target="_blank" rel="noreferrer">
            View on GitHub
            <ArrowUpRightIcon size={16} />
          </a>
        </div>
      </header>
      <main>
        <section className="border-b">
          <div className="shell hero-inner">
            <div className="flex min-w-0 flex-col items-start">
              <h1 className="hero-title">
                <span className="line">Lucide icons</span>
                <span className="line">that move</span>
              </h1>
              <svg className="pulse-mark" viewBox="0 0 240 24" aria-hidden="true" focusable="false">
                <path className="pulse-line" d="M0 12 H72 L84 2 L98 22 L110 6 L122 12 H240" />
              </svg>
              <p className="max-w-[44ch] text-lg text-muted-foreground">
                {total.toLocaleString('en-US')} icons for React, each with its own animation. Search the set, pick a size and click an icon to copy its name.
              </p>
              <Button asChild size="lg" className="mt-8">
                <a href="#catalog">
                  Browse icons
                  <ArrowDownIcon />
                </a>
              </Button>
            </div>
            <div className="specimen">
              <div className="specimen-icon" aria-hidden="true">
                <Icon key={specimen} name={specimen} size={112} loop="always" reducedMotion="system" />
              </div>
              <code className="max-w-full text-center text-[0.8125rem] text-muted-foreground [overflow-wrap:anywhere]">{`<Icon name="${specimen}" loop="always" />`}</code>
              <ToggleGroup
                type="single"
                spacing={1}
                value={specimen}
                onValueChange={(value) => value && setSpecimen(value)}
                aria-label="Preview icon"
                className="flex-wrap justify-center"
              >
                {featured.map((name) => (
                  <ToggleGroupItem
                    key={name}
                    value={name}
                    aria-label={name}
                    className="size-11 data-[state=on]:bg-background data-[state=on]:text-foreground data-[state=on]:shadow-sm"
                  >
                    <Icon name={name} size={20} />
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            </div>
          </div>
        </section>
        <section className="shell catalog" id="catalog" aria-labelledby="catalog-title">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <h2 id="catalog-title" className="text-[clamp(2rem,6vw,3rem)] leading-[1.05] font-medium tracking-tight">
              Find an icon
            </h2>
            <p className="text-sm text-muted-foreground tabular-nums" aria-live="polite">
              <strong className="font-medium text-foreground">{icons.length.toLocaleString('en-US')}</strong> of {total.toLocaleString('en-US')} icons
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <InputGroup className="h-12 flex-[1_1_18rem] bg-card">
              <InputGroupAddon>
                <SearchIcon size={16} />
              </InputGroupAddon>
              <InputGroupInput
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search"
                aria-label="Search icons"
                autoComplete="off"
                spellCheck={false}
                className="text-base"
              />
              {query && (
                <InputGroupAddon align="inline-end">
                  <InputGroupButton size="icon-sm" aria-label="Clear search" onClick={() => setQuery('')}>
                    <XIcon size={16} />
                  </InputGroupButton>
                </InputGroupAddon>
              )}
            </InputGroup>
            <div className="flex min-h-12 items-center gap-3 text-sm font-medium">
              <span aria-hidden="true">Size</span>
              <Slider className="w-32" min={18} max={48} value={[size]} onValueChange={([value]) => setSize(value ?? 28)} aria-label="Icon size" />
              <output className="min-w-[4ch] font-mono text-[0.8125rem] text-muted-foreground tabular-nums">{size}px</output>
            </div>
          </div>
          <section className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2" aria-label="Motion settings">
            <h3 className="text-sm font-medium">Animation</h3>
            <ToggleGroup
              type="single"
              spacing={1}
              value={motion}
              onValueChange={(value) => value && setMotion(value as Motion)}
              aria-label="Animation behavior"
              className="rounded-(--radius-card) bg-muted p-1"
            >
              {motionModes.map((mode) => (
                <ToggleGroupItem
                  key={mode.value}
                  value={mode.value}
                  className="px-4 text-muted-foreground data-[state=on]:bg-background data-[state=on]:text-foreground data-[state=on]:shadow-sm"
                >
                  {mode.label}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
            <p className="min-w-0 flex-[1_1_16rem] text-sm text-muted-foreground">
              {motion === 'hover'
                ? 'Icons move when you point at them or focus them with the keyboard'
                : motion === 'always'
                  ? 'Every icon on screen loops. If your system is set to reduce motion, they stay still'
                  : 'Icons stay still'}
            </p>
          </section>
          <Tabs value={slug(group)} onValueChange={(value) => setGroup(groups.find((item) => slug(item) === value) ?? groups[0])} className="mt-6 gap-6">
            <TabsList variant="line" aria-label="Icon category" className="filters">
              {groups.map((item, i) => (
                <TabsTrigger key={item} value={slug(item)} className="px-3">
                  {item}
                  {i === 0 && <span className="font-mono text-xs text-muted-foreground tabular-nums">{total.toLocaleString('en-US')}</span>}
                </TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value={slug(group)}>
              {icons.length > 0 && (
                <div style={{ '--icon-size': `${size}px` } as CSSProperties}>
                  <IconGrid icons={icons} motion={motion} />
                </div>
              )}
              {icons.length === 0 && (
                <Empty role="status" className="rounded-(--radius-card) bg-muted py-16">
                  <EmptyHeader>
                    <EmptyMedia variant="icon" className="size-12">
                      <SearchIcon size={24} loop={false} />
                    </EmptyMedia>
                    <EmptyTitle className="text-2xl font-medium [overflow-wrap:anywhere]">
                      {query.trim() ? `No icons match “${query.trim()}”` : 'No icons in this category'}
                    </EmptyTitle>
                    <EmptyDescription className="text-base">Check the spelling, try a shorter word, or browse another category.</EmptyDescription>
                  </EmptyHeader>
                  <Button onClick={clear}>Clear search</Button>
                </Empty>
              )}
            </TabsContent>
          </Tabs>
        </section>
      </main>
      <footer className="border-t">
        <div className="shell flex flex-wrap justify-between gap-x-6 gap-y-2 py-6 text-sm text-muted-foreground">
          <span>ByLucide, animated icons for React</span>
          <span>Icon artwork by the Lucide project</span>
        </div>
      </footer>
    </>
  );
}
export default App;
