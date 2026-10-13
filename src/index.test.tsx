import { beforeAll, afterEach, describe, expect, test } from 'bun:test';
import { Window } from 'happy-dom';
import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { act, cleanup, fireEvent, render } from '@testing-library/react';
import { readdirSync } from 'node:fs';
import { Icon, ArrowDownIcon, normalizeName, manifest } from './index';
import { iconRegistry } from './icon-registry';
import type { IconDriver, IconSvgProps } from './icon-runtime';
import { createVolumeController } from './volume-cycle';

beforeAll(() => {
  const window = new Window({ url: 'http://localhost' });
  Object.assign(globalThis, { window, document: window.document, navigator: window.navigator, HTMLElement: window.HTMLElement, SVGElement: window.SVGElement, Element: window.Element, getComputedStyle: window.getComputedStyle.bind(window), MutationObserver: window.MutationObserver, IntersectionObserver: window.IntersectionObserver });
  Object.defineProperty(window, 'matchMedia', { configurable: true, value: (query: string) => ({ matches: false, media: query, addEventListener() {}, removeEventListener() {} }) });
  Object.assign(globalThis, { matchMedia: window.matchMedia.bind(window), requestAnimationFrame: (callback: FrameRequestCallback) => setTimeout(() => callback(performance.now()), 16), cancelAnimationFrame: clearTimeout });
});
afterEach(() => cleanup());

describe('arquitetura e catálogo unificado', () => {
  test('590 ícones, catálogo alinhado aos módulos locais', () => {
    const names = manifest.icons;
    expect(names.length).toBe(590);
    expect(new Set(names).size).toBe(names.length);
    expect(Object.keys(iconRegistry).sort()).toEqual(names.sort());
    const files = readdirSync('src/icons').sort();
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
    const ref = React.createRef<HTMLSpanElement>();
    const view = render(<Icon ref={ref} name="calendar" id="icon" data-marker="yes" title="agenda" aria-labelledby="label" onClick={() => clicks++} size={31} strokeWidth={4} />);
    expect(ref.current).toBe(view.container.querySelector('span'));
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
      return <svg data-state={resets ? 'normal' : 'animate'} />;
    };
    const wait = () => new Promise(resolve => setTimeout(resolve, 10));
    try {
      const view = render(<Icon name="arrow-down" />);
      const span = view.container.querySelector('span')!;
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
      return <svg data-animated="true" />;
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
      const node = view.container.querySelector('span')!;
      expect(node.querySelector('svg')).toBeTruthy();
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
    const span = view.container.querySelector('span')!;
    await act(async () => fireEvent.mouseEnter(span));
    expect(view.container.querySelector('svg')?.getAttribute('data-volume-cycle')).toBe('1');
    expect(view.container.querySelector('svg')?.getAttribute('data-volume-phase')).toBe('wave');
    expect(view.container.querySelectorAll('path').length).toBeGreaterThanOrEqual(2);
    await act(async () => fireEvent.mouseLeave(span));
    expect(view.container.querySelector('svg')?.getAttribute('data-volume-phase')).toBe('idle');
    view.rerender(<Icon name="volume" loop="always" />);
    expect(Number(view.container.querySelector('svg')?.getAttribute('data-volume-cycle'))).toBeGreaterThanOrEqual(2);
    view.rerender(<Icon name="volume" loop={false} />);
    expect(view.container.querySelector('svg')?.getAttribute('data-volume-phase')).toBe('idle');
    view.unmount();
  });
});
