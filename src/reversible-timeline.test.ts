import { describe, expect, test } from 'bun:test';
import { motionValue, type LegacyAnimationControls } from 'motion/react';
import { captureControls, createPhase, disposePhases, playPhase, seekPhase } from './reversible-timeline';

function fixture(variants: Record<string, unknown>) {
  const values = new Map([['x', motionValue(0)], ['y', motionValue(0)], ['rotate', motionValue(0)]]);
  const control = { subscribe: () => () => {} } as unknown as LegacyAnimationControls;
  captureControls(control);
  const element = { getVariant: (name: string) => variants[name], getProps: () => ({}), values, readValue: (name: string) => values.get(name)?.get(), getValue: (name: string) => values.get(name), variantChildren: new Set<unknown>() };
  control.subscribe(element as never);
  return { control, values, element };
}
const tick = () => new Promise(resolve => setTimeout(resolve, 40));

describe('shared reversible timeline', () => {
  test('parent delay never leaks into child offsets; delayChildren and stagger do', () => {
    const parent = fixture({ animate: { x: 10, transition: { duration: 1, delay: 2, delayChildren: 0.3, staggerChildren: 0.2 } } });
    const a = fixture({ animate: { x: 10, transition: { duration: 1, delay: 0.1 } } });
    const b = fixture({ animate: { x: 10, transition: { duration: 1 } } });
    parent.element.variantChildren.add(a.element);
    parent.element.variantChildren.add(b.element);
    const phase = createPhase([parent.control], ['animate']);
    expect(phase.tracks.map(track => track.delay)).toEqual([2, 0.4, 0.5]);
    seekPhase(phase, 0.8);
    expect(parent.values.get('x')!.get()).toBe(0);
    expect(a.values.get('x')!.get()).toBeGreaterThan(0);
    expect(b.values.get('x')!.get()).toBeGreaterThan(0);
    disposePhases([phase]);
  });
  test('asymmetric keyframes and delayed properties retrace a shared clock', async () => {
    const { control, values } = fixture({ animate: { x: [0, 100, 20], y: [0, 60], transition: { duration: 1, ease: 'linear', times: [0, 0.25, 1], y: { duration: 0.5, delay: 0.5, ease: 'linear' } } } });
    const phase = createPhase([control], ['animate']);
    expect(phase.duration).toBe(1);
    seekPhase(phase, 0.25); await tick();
    expect(values.get('x')!.get()).toBeCloseTo(100);
    expect(values.get('y')!.get()).toBe(0);
    seekPhase(phase, 0.75); await tick();
    expect(values.get('y')!.get()).toBeCloseTo(30);
    seekPhase(phase, 0.25); await tick();
    expect(values.get('x')!.get()).toBeCloseTo(100);
    expect(values.get('y')!.get()).toBe(0);
    disposePhases([phase]);
  });
  test('phases resolve from prior endpoints and reverse in opposite order', async () => {
    const { control, values } = fixture({ first: { x: 20, transition: { duration: 0.1, ease: 'linear' } }, second: { x: 80, transition: { duration: 0.1, ease: 'linear' } } });
    const first = createPhase([control], ['first']);
    seekPhase(first, first.duration); await tick();
    const second = createPhase([control], ['second']);
    seekPhase(second, second.duration); await tick();
    expect(values.get('x')!.get()).toBe(80);
    seekPhase(second, 0); await tick();
    expect(values.get('x')!.get()).toBe(20);
    seekPhase(first, 0); await tick();
    expect(values.get('x')!.get()).toBe(0);
    disposePhases([first, second]);
  });
  test('infinite repeats are finite and aborted playback settles', async () => {
    const { control } = fixture({ animate: { rotate: 360, transition: { duration: 1, repeat: Infinity } } });
    const phase = createPhase([control], ['animate']);
    expect(phase.duration).toBe(1);
    const token = new AbortController();
    const pending = playPhase(phase, false, token.signal);
    token.abort();
    await pending;
    await playPhase(phase, true, token.signal);
    disposePhases([phase]);
  });
  test('spring rotation retraces and repeated cycles do not accumulate', async () => {
    const { control, values } = fixture({ animate: { rotate: 360, transition: { type: 'spring', stiffness: 150, damping: 25 } } });
    for (let cycle = 0; cycle < 2; cycle++) {
      const phase = createPhase([control], ['animate']);
      expect(Number.isFinite(phase.duration)).toBe(true);
      seekPhase(phase, phase.duration * 0.3); await tick();
      const forward = values.get('rotate')!.get();
      seekPhase(phase, phase.duration); await tick();
      seekPhase(phase, phase.duration * 0.3); await tick();
      expect(values.get('rotate')!.get()).toBeCloseTo(forward);
      seekPhase(phase, 0); await tick();
      expect(values.get('rotate')!.get()).toBe(0);
      disposePhases([phase]);
    }
  });
});
