'use client';
import * as React from 'react';
import { icons as lucideIcons, type LucideIcon } from 'lucide-react';
import { lucideSymbols } from './lucide-catalog';
import { animatedIconCss } from './icon-animations.css';
import type { LegacyAnimationControls } from 'motion/react';
import type { IconProps } from './types';

export interface IconDriver {
  play(signal: AbortSignal): Promise<void>;
  reset(): void;
}
export interface IconSvgProps { size: number; color?: string; strokeWidth: number; reduced?: boolean; register(driver: IconDriver | null): void }
export type IconSvg = React.ComponentType<IconSvgProps>;

export function useControlsDriver(register: IconSvgProps['register'], ...controls: LegacyAnimationControls[]) {
  useSequenceDriver(register, ['animate'], 'normal', ...controls);
}

export function useCssHoverDriver(register: IconSvgProps['register']) {
  const ref = React.useRef<SVGSVGElement>(null);
  React.useLayoutEffect(() => {
    const svg = ref.current;
    if (!svg) return;
    const doc = svg.ownerDocument;
    if (!doc.getElementById('bylucide-color-icon-styles')) {
      const style = doc.createElement('style');
      style.id = 'bylucide-color-icon-styles';
      style.textContent = animatedIconCss;
      doc.head.appendChild(style);
    }
    const reset = () => {
      // Transition-only upstream effects must return to rest before the next cycle.
      // Otherwise a rapid class toggle leaves fill-opacity at its previous target.
      const fills = Array.from(svg.querySelectorAll<SVGElement>('.al-anim-fill'));
      const transitions = fills.map(node => node.style.transition);
      fills.forEach(node => { node.style.transition = 'none'; });
      svg.classList.remove('bylucide-animate');
      fills.forEach(node => { void getComputedStyle(node).fillOpacity; });
      fills.forEach((node, index) => { node.style.transition = transitions[index]!; });
    };
    register({ reset, play(signal) {
      if (signal.aborted) return Promise.resolve();
      reset();
      svg.getBoundingClientRect(); // Commit reset before restarting the CSS keyframes.
      svg.classList.add('bylucide-animate');
      return new Promise<void>(resolve => {
        const finish = () => { clearTimeout(timer); signal.removeEventListener('abort', finish); reset(); resolve(); };
        const timer = setTimeout(finish, 1260); // 700ms longest animation + 560ms maximum stagger.
        signal.addEventListener('abort', finish, { once: true });
      });
    }});
    return () => { reset(); register(null); };
  }, [register]);
  return ref;
}

// Play upstream's named phases in order, waiting for Motion's actual completion callbacks.
export function useSequenceDriver(register: IconSvgProps['register'], phases: string[], resting: string, ...controls: LegacyAnimationControls[]) {
  const current = React.useRef(controls);
  current.current = controls;
  const currentPhases = React.useRef(phases);
  currentPhases.current = phases;
  const currentResting = React.useRef(resting);
  currentResting.current = resting;
  const play = React.useRef<Promise<void> | null>(null);
  React.useLayoutEffect(() => {
    const driver: IconDriver = {
      async play(signal) {
        if (signal.aborted) return;
        const completed = (async () => {
          for (const phase of currentPhases.current) {
            if (signal.aborted) break;
            await Promise.all(current.current.map(control => control.start(phase)));
          }
        })();
        play.current = completed;
        let onAbort: (() => void) | undefined;
        try {
          await Promise.race([completed, new Promise<void>(resolve => {
            onAbort = () => { current.current.forEach(control => control.stop()); resolve(); };
            signal.addEventListener('abort', onAbort, { once: true });
          })]);
        } finally { if (onAbort) signal.removeEventListener('abort', onAbort); if (play.current === completed) play.current = null; }
      },
      reset() { current.current.forEach(control => { control.stop(); control.set(currentResting.current); }); },
    };
    register(driver);
    return () => { current.current.forEach(control => control.stop()); register(null); };
  }, [register]);
}

const subscribe = (notify: () => void) => {
  if (typeof window === 'undefined' || !window.matchMedia) return () => {};
  const media = window.matchMedia('(prefers-reduced-motion: reduce)');
  media.addEventListener('change', notify);
  return () => media.removeEventListener('change', notify);
};
const snapshot = () => typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
export function useReduced() { return React.useSyncExternalStore(subscribe, snapshot, () => false); }

// Animation is opt-out by design; consumers opt into OS preference with reducedMotion="system".
export const IconShell = React.forwardRef<HTMLSpanElement, IconProps & { name: string; svg?: IconSvg }>(function IconShell({ name, svg: Svg, size = 24, color, strokeWidth = 2, loop = 'hover', reducedMotion = 'ignore', onMouseEnter, onMouseLeave, style, ...rest }, ref) {
  const reduced = useReduced() && reducedMotion !== 'ignore';
  const symbol = Object.hasOwn(lucideSymbols, name) ? lucideSymbols[name] : undefined;
  const staticIcon = symbol ? (lucideIcons as Record<string, LucideIcon>)[symbol] : undefined;
  const [hovered, setHovered] = React.useState(false);
  const [driver, setDriver] = React.useState<IconDriver | null>(null);
  const presentDriver = React.useRef<IconDriver | null>(null);
  const registerDriver = React.useCallback((next: IconDriver | null) => {
    presentDriver.current = next;
    setDriver(next);
  }, []);
  const controller = React.useRef<AbortController | null>(null);
  const label = rest['aria-label'] || rest['aria-labelledby'];
  React.useEffect(() => {
    if (!driver || reduced || loop === false || (loop === 'hover' && !hovered)) {
      controller.current?.abort();
      controller.current = null;
      if (driver && presentDriver.current === driver && !reduced && (loop === false || (loop === 'hover' && !hovered))) driver.reset();
      return;
    }
    const token = new AbortController();
    controller.current = token;
    const run = async () => {
      while (!token.signal.aborted) {
        try { await driver.play(token.signal); } catch { break; }
        if (token.signal.aborted) break;
        driver.reset();
        // Yield once so a zero-duration animation cannot starve the event loop.
        await new Promise<void>(resolve => {
          const onAbort = () => { clearTimeout(id); resolve(); };
          const id = setTimeout(() => { token.signal.removeEventListener('abort', onAbort); resolve(); }, 0);
          token.signal.addEventListener('abort', onAbort, { once: true });
        });
      }
    };
    void run();
    return () => { token.abort(); if (controller.current === token) controller.current = null; if (presentDriver.current === driver) driver.reset(); };
  }, [driver, reduced, loop, hovered]);
  const display = reduced && staticIcon ? React.createElement(staticIcon, { size, color, strokeWidth, 'aria-hidden': true }) : Svg ? <Svg size={size} color={color} strokeWidth={strokeWidth} reduced={reduced} register={registerDriver} /> : staticIcon ? React.createElement(staticIcon, { size, color, strokeWidth, 'aria-hidden': true }) : null;
  if (!display) return null;
  return <span {...rest} ref={ref} data-icon={name} aria-hidden={rest['aria-hidden'] ?? (label ? undefined : true)} role={rest.role ?? (label ? 'img' : undefined)} style={{ display: 'inline-flex', verticalAlign: 'middle', ...style, color }} onMouseEnter={event => { setHovered(true); onMouseEnter?.(event); }} onMouseLeave={event => { setHovered(false); onMouseLeave?.(event); }}>{display}</span>;
});
