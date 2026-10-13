import { useMemo, useState } from 'react';
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
function App() {
  const [query, setQuery] = useState('');
  const [group, setGroup] = useState('All icons');
  const [motion, setMotion] = useState<Motion>('hover');
  const [hoveredName, setHoveredName] = useState<string | null>(null);
  const [size, setSize] = useState(28);
  const icons = useMemo(() => (manifest.icons as string[]).filter(name => name.includes(query.trim().toLowerCase()) && (group === 'All icons' || belongs[group]?.some(word => name.includes(word)))), [query, group]);
  return <main>
    <header className="top"><a className="brand" href="#">by<span>lucide</span></a><span className="edition">THE ANIMATED ICON LIBRARY</span><a className="github" href="https://github.com" target="_blank" rel="noreferrer">Explore package <span>↗</span></a></header>
     <section className="hero"><div className="hero-copy"><p className="eyebrow"><span className="live-dot"/> A little motion goes a long way</p><h1>Icons with<br/><em>a pulse.</em></h1><p className="intro">A considered collection of Lucide icons, brought to life. Find the right one, then give it a little motion.</p></div><div className="hero-art" aria-hidden="true"><span className="orbit orbit-one"/><span className="orbit orbit-two"/><div className="sun-disc"><Icon name="sparkles" size={76} loop="always" reducedMotion="ignore"/></div><span className="art-caption">FIG. 01 — MOTION STUDY</span></div></section>
    <section className="catalog"><div className="catalog-head"><div><p className="eyebrow">THE COLLECTION</p><h2>Find your icon<span className="period">.</span></h2></div><div className="count"><strong>{icons.length.toLocaleString()}</strong><span> / {(manifest.icons as string[]).length.toLocaleString()} icons</span></div></div>
      <div className="toolbar"><div className="search"><Icon name="search" size={18}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search icons…" aria-label="Search icons"/><kbd>⌘ K</kbd></div><div className="size-control"><span>SIZE</span><input type="range" min="18" max="48" value={size} onChange={e => setSize(+e.target.value)} aria-label="Icon size"/><b>{size}px</b></div></div>
        <section className="motion-controls" aria-label="Motion settings"><div><span className="eyebrow">MOTION PREVIEW</span><p>{motion === 'hover' ? 'Hover or point to any card to see its icon move.' : motion === 'always' ? 'Every icon is animated continuously.' : 'Icon animations are turned off.'}</p></div><div className="motion-actions"><div className="segmented" role="group" aria-label="Animation behavior">{(['hover', 'always', 'off'] as Motion[]).map(m => <button type="button" key={m} aria-pressed={motion === m} className={motion === m ? 'selected' : ''} onClick={() => { setMotion(m); setHoveredName(null); }}>{m === 'hover' ? 'On card hover' : m === 'always' ? 'Always animate' : 'Animation off'}</button>)}</div></div></section>
      <div className="filters" role="tablist" aria-label="Icon category">{groups.map((item, i) => <button key={item} role="tab" aria-selected={group === item} className={group === item ? 'active' : ''} onClick={() => setGroup(item)}>{item}{i === 0 && <sup>{(manifest.icons as string[]).length}</sup>}</button>)}</div>
       <div className="grid">{icons.map(name => <article className="tile" key={name} onPointerEnter={() => setHoveredName(name)} onPointerLeave={() => setHoveredName(current => current === name ? null : current)}><div className="glyph"><Icon name={name} size={size} loop={motion === 'always' || (motion === 'hover' && hoveredName === name) ? 'always' : false} reducedMotion="ignore"/></div><span className="icon-name">{name}</span><button className="copy" type="button" aria-label={`Copy ${name} icon code`} title={`Copy ${name}`} onClick={() => navigator.clipboard?.writeText(`<Icon name="${name}" />`)}>↗</button></article>)}</div>
      {icons.length === 0 && <div className="empty"><span>⌕</span><h3>No icons found</h3><p>Try another search or category.</p></div>}
      <footer className="controls"><span className="bottom">BYLUCIDE · ICONS WITH A PULSE</span></footer>
    </section><div className="bottom"><span>DESIGNED TO MOVE · BUILT WITH LUCIDE</span><span>bylucide <b>✳</b> 2026</span></div>
  </main>;
}
export default App;
