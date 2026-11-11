import { memo, useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';
import { Icon, manifest } from 'bylucide';

type Motion = 'hover' | 'always' | 'off';
const groups = ['All icons', 'Arrows', 'Interface', 'Media', 'Nature', 'People', 'Objects'];
const belongs: Record<string, string[]> = {
  Arrows: ['arrow', 'chevron', 'corner', 'move', 'rotate', 'undo', 'redo', 'turn', 'triangle'],
  Interface: ['align', 'menu', 'search', 'settings', 'layout', 'panel', 'filter', 'check', 'x-', 'plus', 'minus'],
  Media: ['audio', 'play', 'pause', 'volume', 'video', 'camera', 'image', 'music', 'mic'],
  Nature: ['leaf', 'flower', 'tree', 'sun', 'moon', 'cloud', 'wind', 'droplet', 'mountain', 'bird'],
  People: ['user', 'person', 'baby', 'heart', 'smile', 'hand', 'accessibility'],
  Objects: ['book', 'briefcase', 'box', 'car', 'clock', 'cup', 'gift', 'home', 'lightbulb', 'key'],
};
const visibilityListeners = new Map<Element, (visible: boolean) => void>();
let visibilityObserver: IntersectionObserver | undefined;

function observeVisibility(element: Element, listener: (visible: boolean) => void) {
  if (typeof IntersectionObserver === 'undefined') {
    listener(true);
    return;
  }
  visibilityObserver ??= new IntersectionObserver(entries => {
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

const IconTile = memo(function IconTile({ name, motion }: { name: string; motion: Motion }) {
  const tile = useRef<HTMLElement>(null);
  const timer = useRef<number>(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    setVisible(false);
    if (motion === 'always' && tile.current) return observeVisibility(tile.current, setVisible);
  }, [motion]);
  useEffect(() => () => window.clearTimeout(timer.current), []);
  const playing = motion === 'always' ? visible : motion === 'hover' && (hovered || focused);
  const copy = () => {
    navigator.clipboard?.writeText(name).then(() => {
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 1600);
    }, () => {});
  };
  return <article ref={tile} className="tile" data-copied={copied || undefined} onPointerEnter={() => setHovered(true)} onPointerLeave={() => setHovered(false)} onPointerCancel={() => setHovered(false)} onFocus={() => setFocused(true)} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}><div className="glyph"><Icon name={name} loop={playing ? 'always' : false} reducedMotion={motion === 'always' ? 'system' : 'ignore'}/></div><span className="icon-name">{name}</span><button className="copy" type="button" aria-label="Copy icon name" onClick={copy}><span className="copy-label" aria-hidden="true">{copied ? 'Copied' : 'Copy'}</span></button></article>
});

const IconGrid = memo(function IconGrid({ icons, motion }: { icons: string[]; motion: Motion }) {
  return <div className="grid">{icons.map(name => <IconTile key={name} name={name} motion={motion}/>)}</div>;
});

function App() {
  const [query, setQuery] = useState('');
  const [group, setGroup] = useState('All icons');
  const [motion, setMotion] = useState<Motion>('hover');
  const [size, setSize] = useState(28);
  const icons = useMemo(() => (manifest.icons as string[]).filter(name => name.includes(query.trim().toLowerCase()) && (group === 'All icons' || belongs[group]?.some(word => name.includes(word)))), [query, group]);
  const total = (manifest.icons as string[]).length;
  const clear = () => { setQuery(''); setGroup('All icons'); };
  return <>
    <header className="top"><div className="shell top-inner"><a className="brand" href="#">ByLucide</a><a className="link" href="https://github.com" target="_blank" rel="noreferrer">View on GitHub<span aria-hidden="true"> ↗</span></a></div></header>
    <main>
      <section className="hero"><div className="shell hero-inner"><div className="hero-copy"><h1><span className="line">Icons with</span><span className="line">a pulse.</span></h1><svg className="pulse-mark" viewBox="0 0 240 24" aria-hidden="true" focusable="false"><path className="pulse-line" d="M0 12 H72 L84 2 L98 22 L110 6 L122 12 H240" /></svg><p className="intro">{total.toLocaleString()} Lucide icons that move. Search the set, pick a size, and preview each animation before you ship it.</p><a className="button" href="#catalog">Browse the collection</a></div><div className="hero-art" aria-hidden="true"><div className="specimen"><div className="specimen-icon"><Icon name="sparkles" size={112} loop="always" reducedMotion="system"/></div><code>{'<Icon name="sparkles" loop="always" />'}</code></div></div></div></section>
      <section className="shell catalog" id="catalog" aria-labelledby="catalog-title"><div className="catalog-head"><h2 id="catalog-title">Find your icon</h2><p className="count" aria-live="polite"><strong>{icons.length.toLocaleString()}</strong> of {total.toLocaleString()} icons</p></div>
        <div className="toolbar"><div className="search"><Icon name="search" size={18}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search icons…" aria-label="Search icons" autoComplete="off" spellCheck={false}/>{query && <button type="button" className="clear" aria-label="Clear search" onClick={() => setQuery('')}><Icon name="x" size={16}/></button>}</div><label className="size-control"><span>Size</span><input type="range" min="18" max="48" value={size} onChange={e => setSize(+e.target.value)} aria-label="Icon size"/><output>{size}px</output></label></div>
        <section className="motion-controls" aria-label="Motion settings"><div className="motion-copy"><h3>Motion preview</h3><p>{motion === 'hover' ? 'Hover over a card or focus its copy button to see its icon move.' : motion === 'always' ? 'Visible icons animate continuously. Reduced-motion preferences are respected.' : 'Icon animations are turned off.'}</p></div><div className="segmented" role="group" aria-label="Animation behavior">{(['hover', 'always', 'off'] as Motion[]).map(m => <button type="button" key={m} aria-pressed={motion === m} className={motion === m ? 'selected' : ''} onClick={() => setMotion(m)}>{m === 'hover' ? 'On card hover' : m === 'always' ? 'Always animate' : 'Animation off'}</button>)}</div></section>
        <div className="filters" role="tablist" aria-label="Icon category">{groups.map((item, i) => <button type="button" key={item} role="tab" aria-selected={group === item} className={group === item ? 'active' : ''} onClick={() => setGroup(item)}>{item}{i === 0 && <sup>{total}</sup>}</button>)}</div>
        {icons.length > 0 && <div style={{ '--icon-size': `${size}px` } as CSSProperties}><IconGrid icons={icons} motion={motion}/></div>}
        {icons.length === 0 && <div className="empty" role="status"><Icon name="search" size={32} loop={false}/><h3>{query.trim() ? `No icons match “${query.trim()}”` : 'No icons in this category'}</h3><p>Check the spelling, try a shorter word, or browse another category.</p><button type="button" className="button" onClick={clear}>Clear search</button></div>}
      </section>
    </main>
    <footer className="footer"><div className="shell footer-inner"><span>ByLucide, animated icons for React.</span><span>Icons by Lucide. © 2026</span></div></footer>
  </>;
}
export default App;
