'use client';
import * as React from 'react';

export interface HoverState {
  hovered: boolean;
  setHovered: React.Dispatch<React.SetStateAction<boolean>>;
  /** True when an interactive ancestor drives the state; the icon's own pointer events are then ignored. */
  bound: boolean;
}

export type IconTrigger = 'parent' | 'self';

/**
 * Interactive ancestors that drive the icon animation. An icon inside a button,
 * link, menu item, select option or tab animates when that control is hovered
 * or receives keyboard focus, not only when the pointer sits on the 16px glyph.
 *
 * `data-icon-trigger` on any ancestor makes it the trigger explicitly;
 * `data-icon-trigger="self"` keeps the glyph-only behaviour for that subtree.
 */
export const TRIGGER_SELECTOR = [
  '[data-icon-trigger]',
  'button',
  'a[href]',
  'summary',
  'label',
  '[role="button"]',
  '[role="link"]',
  '[role="menuitem"]',
  '[role="menuitemcheckbox"]',
  '[role="menuitemradio"]',
  '[role="option"]',
  '[role="tab"]',
  '[role="switch"]',
  '[role="checkbox"]',
  '[role="radio"]',
  '[role="combobox"]',
  '[data-slot="select-trigger"]',
].join(',');

export function findTrigger(icon: Element): HTMLElement | null {
  const host = icon.parentElement?.closest<HTMLElement>(TRIGGER_SELECTOR) ?? null;
  if (!host || host.dataset.iconTrigger === 'self') return null;
  return host;
}

const canHover = () =>
  typeof window === 'undefined' || !window.matchMedia || window.matchMedia('(hover: hover)').matches;

const isDisabled = (el: HTMLElement) =>
  el.matches(':disabled') || el.getAttribute('aria-disabled') === 'true' || el.hasAttribute('data-disabled');

export function useHover(element?: Element | null, trigger: IconTrigger = 'parent'): HoverState {
  const [hovered, setHovered] = React.useState(false);
  const [bound, setBound] = React.useState(false);

  React.useEffect(() => {
    if (!element || trigger !== 'parent') return;
    const host = findTrigger(element);
    if (!host) return;
    setBound(true);

    let pointer = false;
    let focus = false;
    const sync = () => setHovered((pointer || focus) && !isDisabled(host));
    const enter = (event: PointerEvent) => {
      if (event.pointerType === 'touch' || !canHover()) return;
      pointer = true;
      sync();
    };
    const leave = () => { pointer = false; sync(); };
    const focusIn = () => {
      let visible = true;
      try { visible = host.matches(':focus-visible') || host.matches('[data-highlighted]'); } catch { /* old engines */ }
      focus = visible;
      sync();
    };
    const focusOut = (event: FocusEvent) => {
      if (event.relatedTarget instanceof Node && host.contains(event.relatedTarget)) return;
      focus = false;
      sync();
    };

    host.addEventListener('pointerenter', enter);
    host.addEventListener('pointerleave', leave);
    host.addEventListener('focusin', focusIn);
    host.addEventListener('focusout', focusOut);
    return () => {
      host.removeEventListener('pointerenter', enter);
      host.removeEventListener('pointerleave', leave);
      host.removeEventListener('focusin', focusIn);
      host.removeEventListener('focusout', focusOut);
      setHovered(false);
      setBound(false);
    };
  }, [element, trigger]);

  return { hovered, setHovered, bound };
}
