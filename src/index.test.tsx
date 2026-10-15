import { beforeAll, afterEach, describe, expect, test } from 'bun:test';
import { Window } from 'happy-dom';
import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { act, cleanup, fireEvent, render } from '@testing-library/react';
import { readFileSync, readdirSync } from 'node:fs';
import { Icon, ArrowDownIcon, normalizeName, manifest } from './index';
import { iconRegistry } from './icon-registry';
import { IconShell, MotionSvgRoot, SvgRoot, useControlsDriver, useSequenceDriver, type IconDriver, type IconSvgProps } from './icon-runtime';
import { createVolumeController } from './volume-cycle';
import { motion, type LegacyAnimationControls } from 'motion/react';
import { simpleMotion } from './simple-motion';

beforeAll(() => {
  const window = new Window({ url: 'http://localhost' });
  Object.assign(globalThis, { window, document: window.document, navigator: window.navigator, HTMLElement: window.HTMLElement, SVGElement: window.SVGElement, Element: window.Element, getComputedStyle: window.getComputedStyle.bind(window), MutationObserver: window.MutationObserver });
  Reflect.deleteProperty(globalThis, 'IntersectionObserver');
  Object.defineProperty(window, 'matchMedia', { configurable: true, value: (query: string) => ({ matches: false, media: query, addEventListener() {}, removeEventListener() {} }) });
  Object.assign(globalThis, { matchMedia: window.matchMedia.bind(window), requestAnimationFrame: (callback: FrameRequestCallback) => setTimeout(() => callback(performance.now()), 16), cancelAnimationFrame: clearTimeout });
});
afterEach(() => cleanup());

for (const Root of [SvgRoot, MotionSvgRoot]) {
  test(`${Root.name} preserves internal and shell classes`, () => {
    const Svg = () => <Root className="overflow-visible internal" />;
    const { container, rerender } = render(<IconShell name="arrow-down" svg={Svg} className="consumer" loop={false} />);
    expect(container.querySelector('svg')!.classList.contains('overflow-visible')).toBe(true);
    expect(container.querySelector('svg')!.classList.contains('internal')).toBe(true);
    expect(container.querySelector('svg')!.classList.contains('consumer')).toBe(true);
    rerender(<IconShell name="arrow-down" svg={Svg} loop={false} />);
    expect(container.querySelector('svg')!.classList.contains('overflow-visible')).toBe(true);
  });
}

test('observer reconnects to the current SVG on name changes', () => {
  const observers: { node?: Element; disconnected: boolean }[] = [];
  const original = globalThis.IntersectionObserver;
  Object.assign(globalThis, { IntersectionObserver: class {
    record: { node?: Element; disconnected: boolean } = { disconnected: false };
    constructor() { observers.push(this.record); }
    observe(node: Element) { this.record.node = node; }
    disconnect() { this.record.disconnected = true; }
  } });
  try {
    const refCalls: (SVGSVGElement | null)[] = [];
    const ref = (node: SVGSVGElement | null) => { refCalls.push(node); };
    const { container, rerender, unmount } = render(<Icon name="arrow-down" ref={ref} loop={false} />);
    const first = container.querySelector('svg')!;
    expect(observers.length).toBe(1);
    expect(observers[0]!.node).toBe(first);
    rerender(<Icon name="arrow-down" ref={ref} loop={false} className="updated" />);
    expect(refCalls).toEqual([first]);
    expect(observers.length).toBe(1);
    rerender(<Icon name="arrow-up" ref={ref} loop={false} />);
    const current = container.querySelector('svg')!;
    expect(current).not.toBe(first);
    expect(first.isConnected).toBe(false);
    expect(observers[0]!.disconnected).toBe(true);
    expect(observers.length).toBe(2);
    expect(observers[1]!.node).toBe(current);
    unmount();
    expect(observers[1]!.disconnected).toBe(true);
  } finally {
    if (original) globalThis.IntersectionObserver = original;
    else Reflect.deleteProperty(globalThis, 'IntersectionObserver');
  }
});

test('mounted Motion integration in a fresh browser-initialized process', async () => {
  const child = Bun.spawn([process.execPath, `${import.meta.dir}/../scripts/mounted-motion-check.tsx`], { stdout: 'pipe', stderr: 'pipe' });
  const [code, output, error] = await Promise.all([child.exited, new Response(child.stdout).text(), new Response(child.stderr).text()]);
  expect({ code, error }).toEqual({ code: 0, error: '' });
  expect(output).toContain('two forward/reverse cycles each');
}, 20000);

describe('arquitetura e catálogo unificado', () => {
  test('native SVG roots preserve sizing, props and refs without layout overrides', () => {
    for (const name of ['activity', 'calendar', 'loader-circle', 'volume-2']) {
      const ref = React.createRef<SVGSVGElement>();
      let clicks = 0;
      const view = render(<Icon name={name} ref={ref} size="32" absoluteStrokeWidth strokeWidth={4} className="h-4 w-4" onClick={() => clicks++} style={{ opacity: 0.5 }}><title>Test icon</title></Icon>);
      const svg = view.container.firstElementChild!;
      expect(svg.tagName.toLowerCase()).toBe('svg');
      expect(ref.current).toBe(svg as SVGSVGElement);
      expect(svg.getAttribute('class')).toContain('h-4 w-4');
      expect(svg.getAttribute('width')).toBe('32');
      expect(svg.getAttribute('stroke-width')).toBe('3');
      expect(ref.current!.style.width).toBe('');
      expect(ref.current!.style.height).toBe('');
      expect(ref.current!.style.marginTop).toBe('');
      expect(svg.querySelector('title')?.textContent).toBe('Test icon');
      fireEvent.click(svg);
      expect(clicks).toBe(1);
      view.unmount();
    }
  });
  test('every animated catalog module uses a shared driver, never direct start/register', () => {
    const files = readdirSync(`${import.meta.dir}/icons`).filter(file => file.endsWith('.tsx'));
    expect(files).toHaveLength(1698);
    let animated = 0;
    for (const file of files) {
      const source = readFileSync(`${import.meta.dir}/icons/${file}`, 'utf8');
      expect(source, file).not.toMatch(/\.start\s*\(/);
      expect(source, file).not.toMatch(/\bregister\s*\(/);
      expect(source, file).not.toContain('transitionEnd:');
      if (/\buseAnimation\s*\(/.test(source)) {
        animated++;
        expect(source, file).toMatch(/\buse(?:Controls|Sequence)Driver\s*\(/);
      }
    }
    expect(animated).toBeGreaterThan(119);
  });
  test('catálogo local alinhado aos módulos locais', () => {
    const names = manifest.icons;
    expect(names.length).toBe(1698);
    expect(new Set(names).size).toBe(names.length);
    expect(Object.keys(iconRegistry).sort()).toEqual(names.sort());
    const files = readdirSync('src/icons').filter(file => file.endsWith('.tsx')).sort();
    expect(files).toEqual(names.map(name => `${name}.tsx`).sort());
    for (const name of names) expect(name).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    expect(names).toContain('database');
    expect(names).toContain('circle-check-big');
    expect(names).toContain('list');
    expect(names).toContain('arrow-up-down');
    expect(normalizeName('ArrowDownIcon')).toBe('arrow-down');
    expect(normalizeName('axis-3d')).toBe('axis-3d');
    expect(typeof ArrowDownIcon).toBe('object');
  });
  test('todos os ícones usam Motion, com cobertura completa nas categorias simples e complexas', () => {
    const complex = manifest.categories.complex;
    const simple = manifest.categories.simple;
    expect(complex.length).toBe(590);
    expect(simple.length).toBe(1108);
    expect(manifest.icons).toEqual([...complex, ...simple].sort());
    expect(new Set([...complex, ...simple]).size).toBe(manifest.icons.length);
    for (const name of manifest.icons) {
      const source = readFileSync(name === 'volume' ? 'src/volume-cycle.tsx' : `src/icons/${name}.tsx`, 'utf8');
      expect(source, name).not.toContain('useCssHoverDriver');
      expect(source, name).toMatch(/from ['"]motion\/react['"]/);
      expect(source, name).toMatch(/<(?:motion\.|MotionSvgRoot\b)/);
      expect(source, name).toMatch(/animate=\{/);
      expect(source, name).toMatch(/useControlsDriver|useSequenceDriver|register/);
    }
    expect(readdirSync('src')).not.toContain('icon-animations.css');
  });
  test('accessibility resets wheel rotation before replaying', () => {
    const source = readFileSync('src/icons/accessibility.tsx', 'utf8');
    const wheel = source.slice(source.indexOf('const SECONDARY_GROUP_VARIANTS'), source.indexOf('const PATH_VARIANTS'));
    expect(wheel).toMatch(/normal:\s*\{\s*rotate: 0/);
    expect(wheel).toMatch(/animate:\s*\{\s*rotate: -360/);
    expect(source).toContain('useControlsDriver(register, controls)');
    expect(source).not.toContain('initial="initial"');
    expect(source.match(/initial="normal"/g)).toHaveLength(4);
  });
  test('transições spring de ícones zeram velocidade inicial para evitar overshoot após reset', () => {
    // Motion seeds spring velocity from MotionValue.getVelocity(); reset() writes rest values
    // in the same tick, producing synthetic velocity (~±190/s) that flings SVG coords past bounds.
    const springFiles = readdirSync('src/icons').filter(file => file.endsWith('.tsx'));
    let checked = 0;
    for (const file of springFiles) {
      const source = readFileSync(`src/icons/${file}`, 'utf8');
      const spring = [...source.matchAll(/type: ['"]spring['"][^}]*\}?/g)];
      for (const match of spring) {
        checked++;
        expect(match[0], file).toContain('velocity: 0');
      }
    }
    expect(checked).toBeGreaterThan(100);
  });
  test('cada ícone renderiza SVG e geometria com props reais, incluindo exceções', () => {
    for (const name of manifest.icons) {
      const html = renderToStaticMarkup(<Icon name={name} size={34} strokeWidth={3} color="purple" loop={false} />);
      expect(html).toContain('<svg');
      expect(html).toContain('data-icon="' + name + '"');
      expect(html).toMatch(/stroke-width="[0-9.]+"/);
      expect(html).toContain('width="34"');
    }
  });
  test('fallback Lucide, acessibilidade, refs e props HTML', () => {
    let clicks = 0;
    const ref = React.createRef<SVGSVGElement>();
    const view = render(<Icon ref={ref} name="calendar" id="icon" data-marker="yes" aria-labelledby="label" onClick={() => clicks++} size={31} strokeWidth={4} />);
    expect(ref.current).toBe(view.container.querySelector('svg'));
    expect(ref.current?.getAttribute('aria-hidden')).toBeNull();
    expect(ref.current?.getAttribute('role')).toBe('img');
    expect(ref.current?.getAttribute('aria-labelledby')).toBe('label');
    expect(ref.current?.getAttribute('data-marker')).toBe('yes');
    expect(view.container.querySelector('svg')?.getAttribute('stroke-width')).toBe('4');
    fireEvent.click(ref.current!);
    expect(clicks).toBe(1);
    view.rerender(<Icon name="not-a-real-icon" />);
    expect(view.container.querySelector('svg')).toBeNull();
    view.unmount();
    expect(ref.current).toBeNull();
  });
});

describe('lifecycle único', () => {
  test('repetição após conclusão, hover leave, reentry, always→false, unmount abortável', async () => {
    const original = iconRegistry['arrow-down'];
    const pending: Array<() => void> = [];
    let plays = 0;
    let resets = 0;
    let mounted = true;
    let invalidReset = false;
    iconRegistry['arrow-down'] = ({ register }: IconSvgProps) => {
      React.useLayoutEffect(() => {
        mounted = true;
        const driver: IconDriver = {
          play() { plays++; return new Promise<void>(resolve => pending.push(resolve)); },
          reset() { if (!mounted) invalidReset = true; resets++; },
        };
        register(driver);
        return () => { mounted = false; register(null); };
      }, [register]);
      return <SvgRoot data-state={resets ? 'normal' : 'animate'} />;
    };
    const wait = () => new Promise(resolve => setTimeout(resolve, 10));
    try {
      const view = render(<Icon name="arrow-down" />);
      const span = view.container.querySelector('svg')!;
      expect(plays).toBe(0);
      await act(async () => fireEvent.mouseEnter(span));
      expect(plays).toBe(1);
      await act(async () => { pending.shift()?.(); await wait(); });
      expect(plays).toBeGreaterThan(1);
      await act(async () => fireEvent.mouseLeave(span));
      expect(resets).toBeGreaterThan(0);
      const paused = plays;
      pending.splice(0).forEach(done => done());
      await wait();
      expect(plays).toBe(paused);
      await act(async () => fireEvent.mouseEnter(span));
      expect(plays).toBeGreaterThan(paused);
      view.rerender(<Icon name="arrow-down" loop="always" />);
      view.rerender(<Icon name="arrow-down" loop={false} />);
      expect(resets).toBeGreaterThan(1);
      const stopped = plays;
      pending.splice(0).forEach(done => done());
      await wait();
      expect(plays).toBe(stopped);
      view.unmount();
      expect(invalidReset).toBe(false);
    } finally { iconRegistry['arrow-down'] = original!; }
  });
  test('redução de movimento troca para fallback, marcas ficam visíveis', async () => {
    const original = window.matchMedia;
    let reduced = false;
    const listeners = new Set<() => void>();
    Object.defineProperty(window, 'matchMedia', { configurable: true, value: (query: string) => ({
      get matches() { return reduced && query.includes('prefers-reduced-motion'); }, media: query,
      addEventListener(_event: string, listener: () => void) { listeners.add(listener); },
      removeEventListener(_event: string, listener: () => void) { listeners.delete(listener); },
    }) });
    try {
      const view = render(<Icon name="arrow-down" loop="always" reducedMotion="system" />);
      await act(async () => { reduced = true; listeners.forEach(listener => listener()); });
      expect(view.container.querySelector('svg')).toBeTruthy();
      view.rerender(<Icon name="chrome" loop="always" reducedMotion="system" />);
      expect(view.container.querySelector('svg')).toBeTruthy();
      view.unmount();
      expect(listeners.size).toBe(0);
    } finally { Object.defineProperty(window, 'matchMedia', { configurable: true, value: original }); }
  });
  test('padrão ignora redução de movimento; system exige opt-in para fallback', async () => {
    const originalMedia = window.matchMedia;
    const originalIcon = iconRegistry['arrow-down'];
    let plays = 0;
    Object.defineProperty(window, 'matchMedia', { configurable: true, value: (query: string) => ({
      matches: query.includes('prefers-reduced-motion'), media: query,
      addEventListener() {}, removeEventListener() {},
    }) });
    const Animated = ({ register }: IconSvgProps) => {
      React.useLayoutEffect(() => {
        register({ play: async () => { plays++; }, reset() {} });
        return () => register(null);
      }, [register]);
      return <SvgRoot data-animated="true" />;
    };
    iconRegistry['arrow-down'] = Animated;
    try {
      const view = render(<Icon name="arrow-down" loop="always" />);
      await act(async () => { await new Promise(resolve => setTimeout(resolve, 10)); });
      expect(plays).toBeGreaterThan(0);
      expect(view.container.querySelector('svg[data-animated="true"]')).toBeTruthy();
      view.rerender(<Icon name="arrow-down" loop="always" reducedMotion="system" />);
      expect(view.container.querySelector('svg[data-animated="true"]')).toBeNull();
      expect(view.container.querySelector('svg')).toBeTruthy();
      view.unmount();
    } finally {
      iconRegistry['arrow-down'] = originalIcon!;
      Object.defineProperty(window, 'matchMedia', { configurable: true, value: originalMedia });
    }
  });
  test('exceções preservam geometria e troca de estado em hover', async () => {
    for (const name of ['keyboard', 'volume', 'wifi-low', 'database', 'list', 'circle-check-big']) {
      const view = render(<Icon name={name} />);
      const node = view.container.querySelector('svg')!;
      expect(view.container.firstElementChild).toBe(node);
      expect(node.querySelector('svg')).toBeNull();
      expect(node.querySelector('path, circle, rect, line, polyline, polygon, ellipse')).toBeTruthy();
      await act(async () => fireEvent.mouseEnter(node));
      if (name === 'volume') expect(node.querySelectorAll('path').length).toBeGreaterThan(0);
      await act(async () => fireEvent.mouseLeave(node));
      view.unmount();
    }
  });
  test('volume completa ondas e retorno via callbacks Motion, repete e cancela', async () => {
    const transitions: string[] = [];
    let cycles = 0;
    const machine = createVolumeController(phase => transitions.push(phase), () => cycles++);
    const signal = new AbortController();
    let finished = 0;
    const play = machine.play(signal.signal).then(() => finished++);
    expect(cycles).toBe(1);
    machine.onWaveComplete();
    expect(transitions.at(-1)).toBe('return');
    machine.onIdleComplete();
    await play;
    expect(finished).toBe(1);
    expect(transitions).toEqual(['wave', 'return', 'idle']);
    const replay = machine.play(signal.signal).then(() => finished++);
    expect(cycles).toBe(2);
    signal.abort();
    await replay;
    expect(finished).toBe(2);
    expect(transitions.at(-1)).toBe('idle');
    machine.reset();
    machine.dispose();
    const view = render(<Icon name="volume" />);
    const span = view.container.querySelector('svg')!;
    await act(async () => fireEvent.mouseEnter(span));
    expect(view.container.querySelectorAll('path').length).toBe(5);
    await act(async () => fireEvent.mouseLeave(span));
    view.rerender(<Icon name="volume" loop="always" />);
    view.rerender(<Icon name="volume" loop={false} />);
    expect(view.container.querySelectorAll('path').length).toBe(5);
    view.unmount();
  });
});


test('Motion driver completes, restarts, resets, aborts and unregisters', async () => {
  let driver: IconDriver | null = null;
  const register = (next: IconDriver | null) => { driver = next; };
  function Probe() {
    const controls = { subscribe: () => () => {}, start: async () => {}, stop: () => {}, set: () => {} } as never;
    useControlsDriver(register, controls);
    return <SvgRoot />;
  }
  const view = render(<Probe />);
  const active = driver!;
  const token = new AbortController();
  const first = active.play(token.signal);
  await first;
  const second = active.play(token.signal);
  active.reset();
  token.abort();
  await second;
  await active.play(token.signal);
  expect(document.querySelectorAll('#bylucide-color-icon-styles').length).toBe(0);
  view.unmount();
  expect(driver).toBeNull();
}, 3000);


describe('simple motion regressions', () => {
  test('SVG renderer preserves view-box pivots rather than replacing transformOrigin', () => {
    const origins: [Parameters<typeof simpleMotion>[0], string][] = [
      ['bar', '12px 24px'], ['scale-pop', '12px 12px'], ['gear', '12px 12px'],
      ['bell-ring', '12px 3px'], ['heart-beat', '12px 13px'],
      ['page-turn', '0px 12px'], ['menu-line', '0px 12px'], ['mail-flap', '12px 0px'],
      ['fade', '0px 0px'],
    ];
    for (const [profile, origin] of origins) {
      const props = simpleMotion(profile);
      expect(props.style).not.toHaveProperty('transformOrigin');
      const markup = renderToStaticMarkup(<svg viewBox="0 0 24 24"><motion.path initial="normal" {...props} d="M2 3h4v5" /></svg>);
      expect(markup).toContain(`transform-origin:${origin}`);
      expect(markup).toContain('transform-box:view-box');
    }
  });

  test('profile options, keyframes, stagger and explicit delays survive migration', () => {
    expect(simpleMotion('gear', 3, { rotation: 45 }).variants.animate).toMatchObject({
      transform: 'rotate(45deg)', transition: { type: 'tween', duration: 0.7, delay: 0.24 },
    });
    expect(simpleMotion('nudge', 0, { tx: -2, ty: 3 }).variants.animate).toMatchObject({ transform: 'translate(-2px, 3px)' });
    expect(simpleMotion('menu-line', 0, { scaleX: 0.4 }).variants.animate).toMatchObject({ transform: 'scaleX(0.4)' });
    expect(simpleMotion('draw', 2, { dashLength: 83 }).variants.animate).toMatchObject({ strokeDashoffset: [83, 0], transition: { delay: 0.16 } });
    expect(simpleMotion('draw-line').variants.animate).toMatchObject({ strokeDashoffset: [20, 0] });
    expect(simpleMotion('dot-appear', 9).variants.animate).toMatchObject({ transition: { delay: 0.2, times: [0, 0.4, 0.7, 1] } });
    expect(simpleMotion('bell-ring', 9).variants.animate).toMatchObject({ transition: { delay: 0 }, transform: ['rotate(0deg)', 'rotate(14deg)', 'rotate(-12deg)', 'rotate(8deg)', 'rotate(-5deg)', 'rotate(2deg)', 'rotate(0deg)'] });
    expect(simpleMotion('fill').style.fill).toBe('none');
  });

  test('every simple animated child subscribes directly, without a duplicate SVG subscriber', () => {
    let count = 0;
    for (const file of readdirSync('src/icons').filter(file => file.endsWith('.tsx'))) {
      const source = readFileSync(`src/icons/${file}`, 'utf8');
      if (!source.includes("import { simpleMotion }")) continue;
      count++;
      const root = source.match(/<(?:SvgRoot|MotionSvgRoot)\b[^>]*>/)?.[0];
      expect(root).toBeDefined();
      expect(root!).not.toContain('animate={controls}');
      const children = source.match(/<motion\.(?!svg\b)[\s\S]*?\/>/g) ?? [];
      expect(children.length).toBeGreaterThan(0);
      for (const child of children) {
        expect(child).toContain('animate={controls}');
        expect(child).toContain('initial="normal"');
      }
    }
    expect(count).toBe(1108);
  });

  test('abort settles an unfinished phase, skips return phase, and allows replay/reset', async () => {
    let driver: IconDriver | null = null;
    let stops = 0;
    const sets: string[] = [];
    const controls = {
      subscribe: () => () => {},
      stop() { stops++; },
      set(phase: string) { sets.push(phase); },
    } as unknown as LegacyAnimationControls;
    const register = (next: IconDriver | null) => { driver = next; };
    function Probe() { useSequenceDriver(register, ['animate', 'normal'], 'normal', controls); return null; }
    const view = render(<Probe />);
    const active = driver!;
    const aborted = new AbortController();
    const first = active.play(aborted.signal);
    aborted.abort();
    await first;
    expect(stops).toBe(1);
    active.reset();
    expect(sets).toEqual(['normal']);
    const replayToken = new AbortController();
    await active.play(replayToken.signal);
    const stopped = stops;
    replayToken.abort();
    expect(stops).toBe(stopped);
    await active.play(aborted.signal);
    view.unmount();
    expect(stops).toBe(stopped + 1);
    expect(driver).toBeNull();
  }, 3000);
});
