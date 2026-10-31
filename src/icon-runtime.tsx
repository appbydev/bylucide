'use client';
import * as React from 'react';
import { icons as lucideIcons, type LucideIcon } from 'lucide-react';
import { lucideSymbols } from './lucide-catalog';

import type { IconProps, IconSvg, IconDriver, IconSvgProps } from './types';

import { SvgRoot, MotionSvgRoot, SvgRootContext, type SvgRootContextValue } from './svg/root';
import { useSequenceDriver, useControlsDriver } from './driver';
import { useReduced } from './accessibility';
import { useHover } from './hover';

// Animation is opt-out by design; consumers opt into OS preference with reducedMotion="system".
export const IconShell = React.forwardRef<
  SVGSVGElement,
  IconProps & { name: string; svg?: IconSvg }
>(function IconShell(
  { name, svg: Svg, size = 24, color = 'currentColor', strokeWidth = 2, absoluteStrokeWidth = false, className, children, loop = 'hover', reducedMotion = 'ignore', onMouseEnter, onMouseLeave, style, ...rest },
  ref,
) {
  const reduced = useReduced() && reducedMotion !== 'ignore';
  const symbol = Object.hasOwn(lucideSymbols, name) ? lucideSymbols[name] : undefined;
  const staticIcon = symbol ? (lucideIcons as Record<string, LucideIcon>)[symbol] : undefined;
  const { hovered, setHovered } = useHover();
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
  return <SvgRootContext.Provider value={rootProps as unknown as SvgRootContextValue}>{display}</SvgRootContext.Provider>;
});

export { SvgRoot, MotionSvgRoot, SvgRootContext, useControlsDriver, useSequenceDriver, useReduced, useHover };
export type { IconDriver, IconSvgProps, IconSvg };