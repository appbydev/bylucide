import { animate, type LegacyAnimationControls, type MotionValue } from 'motion/react';

type Element = {
  getVariant(name: string): unknown;
  getProps(): { custom?: unknown; transition?: Record<string, unknown> };
  readValue(name: string): unknown;
  getValue(name: string, initial?: unknown): MotionValue;
  values: Map<string, MotionValue>;
  variantChildren?: Set<Element>;
};
type Track = { animation: ReturnType<typeof animate>; delay: number; duration: number };
export type TimelinePhase = { tracks: Track[]; duration: number };
const subscribers = new WeakMap<LegacyAnimationControls, Set<Element>>();

export function captureControls(control: LegacyAnimationControls) {
  if (subscribers.has(control)) return;
  const elements = new Set<Element>();
  subscribers.set(control, elements);
  const original = control.subscribe.bind(control);
  control.subscribe = ((element: Element) => {
    elements.add(element);
    const unsubscribe = original(element as never);
    return () => { elements.delete(element); unsubscribe(); };
  }) as typeof control.subscribe;
}

export function createPhase(controls: LegacyAnimationControls[], names: string[]): TimelinePhase {
  const tracks: Track[] = [];
  const visited = new Set<Element>();
  const visit = (element: Element, name: string, offset = 0) => {
    if (visited.has(element)) return;
    visited.add(element);
    let target = element.getVariant(name) as any;
    if (typeof target === 'function') {
      const current = Object.fromEntries([...element.values].map(([key, value]) => [key, value.get()]));
      const velocity = Object.fromEntries([...element.values].map(([key, value]) => [key, value.getVelocity()]));
      target = target(element.getProps().custom, current, velocity);
    }
    if (target) {
      const { transition = element.getProps().transition ?? {}, transitionEnd, ...values } = target;
      for (const [key, value] of Object.entries(values)) {
        const motionValue = element.getValue(key, element.readValue(key) ?? (Array.isArray(value) ? value[0] : value));
        const options = { ...transition, ...(transition[key] ?? transition.default ?? {}) };
        const delay = offset + (options.delay ?? 0);
        const animation = animate(motionValue, value as any, { ...options, delay: 0, repeat: options.repeat === Infinity ? 0 : options.repeat, autoplay: false, driver: update => ({ start: () => update(0), stop: () => {}, now: () => 0 }) });
        const duration = animation.duration * ((options.repeat ?? 0) === Infinity ? 1 : 1 + (options.repeat ?? 0)) + (options.repeatDelay ?? 0) * (Number.isFinite(options.repeat) ? options.repeat : 0);
        tracks.push({ animation, delay, duration });
      }
    }
    const children = [...(element.variantChildren ?? [])];
    const transition = target?.transition ?? {};
    // Motion's own delay affects this element, not its descendants.
    // Children inherit only delayChildren/staggerChildren orchestration.
    children.forEach((child, index) => visit(child, name, offset + (transition.delayChildren ?? 0) + (transition.staggerChildren ?? 0) * (transition.staggerDirection === -1 ? children.length - 1 - index : index)));
  };
  controls.forEach((control, index) => subscribers.get(control)?.forEach(element => visit(element, names[index] ?? names[0] ?? '')));
  return { tracks, duration: Math.max(0, ...tracks.map(track => track.delay + track.duration)) };
}

export function seekPhase(phase: TimelinePhase, time: number) {
  for (const track of phase.tracks) track.animation.time = Math.max(0, Math.min(track.duration, time - track.delay));
}

export async function playPhase(phase: TimelinePhase, reverse: boolean, signal: AbortSignal) {
  if (signal.aborted) return;
  seekPhase(phase, reverse ? phase.duration : 0);
  if (!phase.duration) return;
  await new Promise<void>(resolve => {
    const finish = () => { signal.removeEventListener('abort', abort); resolve(); };
    let clock: ReturnType<typeof animate> | undefined;
    const abort = () => { clock?.stop(); finish(); };
    clock = animate(reverse ? phase.duration : 0, reverse ? 0 : phase.duration, {
      duration: phase.duration, ease: 'linear', onUpdate: time => seekPhase(phase, time), onComplete: finish,
    });
    signal.addEventListener('abort', abort, { once: true });
    if (signal.aborted) abort();
  });
}

export function disposePhases(phases: TimelinePhase[]) {
  phases.forEach(phase => phase.tracks.forEach(track => track.animation.stop()));
}
