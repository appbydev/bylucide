'use client';
import * as React from 'react';
import { icons as lucideIcons, type LucideIcon } from 'lucide-react';
import { lucideSymbols } from './lucide-catalog';

import { motion, type SVGMotionProps, type LegacyAnimationControls } from 'motion/react';
import type { IconProps } from './types';
import { captureControls, createPhase, disposePhases, playPhase, type TimelinePhase } from './reversible-timeline';

export interface IconDriver {
  play(signal: AbortSignal): Promise<void>;
  reset(): void;
}
export interface IconSvgProps { size: number | string; color?: string; strokeWidth: number | string; reduced?: boolean; register(driver: IconDriver | null): void }
export type IconSvg = React.ComponentType<IconSvgProps>;

const SvgRootContext = React.createContext<React.ComponentPropsWithRef<'svg'>>({});

export function SvgRoot({ children, ...props }: React.ComponentPropsWithoutRef<'svg'>) {
  const { children: extraChildren, ...shell } = React.useContext(SvgRootContext);
  return <svg {...props} {...shell} className={[props.className, shell.className].filter(Boolean).join(' ')} style={{ ...props.style, ...shell.style }}>{children}{extraChildren}</svg>;
}

export function MotionSvgRoot({ children, ...props }: Omit<SVGMotionProps<SVGSVGElement>, 'children'> & { children?: React.ReactNode }) {
  const { children: extraChildren, ...shell } = React.useContext(SvgRootContext);
  return <motion.svg {...props} {...shell as SVGMotionProps<SVGSVGElement>} className={[props.className, shell.className].filter(Boolean).join(' ')} style={{ ...props.style, ...shell.style }}>{children}{extraChildren}</motion.svg>;
}

export function useControlsDriver(register: IconSvgProps['register'], ...controls: LegacyAnimationControls[]) {
  useSequenceDriver(register, ['animate'], 'normal', ...controls);
}

// Play upstream's named phases in order, waiting for Motion's actual completion callbacks.
export function useSequenceDriver(register: IconSvgProps['register'], phases: (string | string[] | number)[], resting: string | string[], ...controls: LegacyAnimationControls[]) {
  controls.forEach(captureControls);
  const current = React.useRef(controls);
  current.current = controls;
  const currentPhases = React.useRef(phases);
  currentPhases.current = phases;
  const currentResting = React.useRef(resting);
  currentResting.current = resting;
  const play = React.useRef<Promise<void> | null>(null);
  const playback = React.useRef<AbortController | null>(null);
  React.useLayoutEffect(() => {
    const driver: IconDriver = {
      async play(signal) {
        if (signal.aborted) return;
        playback.current?.abort();
        const parentSignal = signal;
        const token = new AbortController();
        playback.current = token;
        const cancel = () => token.abort();
        parentSignal.addEventListener('abort', cancel, { once: true });
        signal = token.signal;
        const completed = (async () => {
          const timeline: TimelinePhase[] = [];
          try {
            for (const name of currentPhases.current) {
              if (signal.aborted) break;
              const phase = typeof name === 'number' ? { tracks: [], duration: name } : createPhase(current.current, Array.isArray(name) ? name : [name]);
              timeline.push(phase);
              await playPhase(phase, false, signal);
            }
            for (const phase of [...timeline].reverse()) {
              if (signal.aborted) break;
              await playPhase(phase, true, signal);
            }
          } finally { disposePhases(timeline); }
        })();
        play.current = completed;
        let onAbort: (() => void) | undefined;
        try {
          await Promise.race([completed, new Promise<void>(resolve => {
            onAbort = () => { current.current.forEach(control => control.stop()); resolve(); };
            signal.addEventListener('abort', onAbort, { once: true });
          })]);
        } finally { parentSignal.removeEventListener('abort', cancel); if (playback.current === token) playback.current = null; if (onAbort) signal.removeEventListener('abort', onAbort); if (play.current === completed) play.current = null; }
      },
      reset() { playback.current?.abort(); current.current.forEach((control, index) => { control.stop(); const resting = currentResting.current; control.set(Array.isArray(resting) ? resting[index]! : resting); }); },
    };
    register(driver);
    return () => { playback.current?.abort(); current.current.forEach(control => control.stop()); register(null); };
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
export const IconShell = React.forwardRef<SVGSVGElement, IconProps & { name: string; svg?: IconSvg }>(function IconShell({ name, svg: Svg, size = 24, color = 'currentColor', strokeWidth = 2, absoluteStrokeWidth = false, className, children, loop = 'hover', reducedMotion = 'ignore', onMouseEnter, onMouseLeave, style, ...rest }, ref) {
  const reduced = useReduced() && reducedMotion !== 'ignore';
  const symbol = Object.hasOwn(lucideSymbols, name) ? lucideSymbols[name] : undefined;
  const staticIcon = symbol ? (lucideIcons as Record<string, LucideIcon>)[symbol] : undefined;
  const [hovered, setHovered] = React.useState(false);
  const [visible, setVisible] = React.useState(true);
  const [element, setElement] = React.useState<SVGSVGElement | null>(null);
  const rootRef = React.useCallback((node: SVGSVGElement | null) => {
    setElement(node);
    if (typeof ref === 'function') {
      const cleanup = (ref as (node: SVGSVGElement | null) => void | (() => void))(node);
      if (typeof cleanup === 'function') return () => { setElement(null); cleanup(); };
    } else if (ref) ref.current = node;
  }, [ref]);
  const [driver, setDriver] = React.useState<IconDriver | null>(null);
  const presentDriver = React.useRef<IconDriver | null>(null);
  const registerDriver = React.useCallback((next: IconDriver | null) => {
    presentDriver.current = next;
    setDriver(next);
  }, []);
  const controller = React.useRef<AbortController | null>(null);
  const label = rest['aria-label'] || rest['aria-labelledby'];
  React.useEffect(() => {
    if (!element || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry?.isIntersecting ?? false));
    observer.observe(element);
    return () => observer.disconnect();
  }, [element]);
  React.useEffect(() => {
    if (!driver || !visible || reduced || loop === false || (loop === 'hover' && !hovered)) {
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
  }, [driver, visible, reduced, loop, hovered]);
  const rootProps: React.ComponentPropsWithRef<'svg'> & { 'data-icon': string } = {
    ...rest,
    ref: rootRef,
    width: rest.width ?? size,
    height: rest.height ?? size,
    stroke: rest.stroke ?? color,
    strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
    className: ['lucide', `lucide-${name}`, className].filter(Boolean).join(' '),
    'data-icon': name,
    'aria-hidden': rest['aria-hidden'] ?? (label ? undefined : true),
    role: rest.role ?? (label ? 'img' : undefined),
    style,
    children,
    onMouseEnter: event => { setHovered(true); onMouseEnter?.(event); },
    onMouseLeave: event => { setHovered(false); onMouseLeave?.(event); },
  };
  const display = reduced && staticIcon ? React.createElement(staticIcon, rootProps) : Svg ? <Svg size={size} color={color} strokeWidth={strokeWidth} reduced={reduced} register={registerDriver} /> : staticIcon ? React.createElement(staticIcon, rootProps) : null;
  if (!display) return null;
  return <SvgRootContext.Provider value={rootProps}>{display}</SvgRootContext.Provider>;
});
