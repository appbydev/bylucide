'use client';
import { motion, useAnimation } from 'motion/react';
import { useControlsDriver } from './icon-runtime';
import type { IconSvgProps, IconDriver } from './icon-runtime';

type Phase = 'idle' | 'wave' | 'return';

/** Mesma máquina usada pelos callbacks de Motion e pelo driver do ícone. */
export function createVolumeController(advance: (phase: Phase) => void, onCycle: () => void): IconDriver & { onWaveComplete(): void; onIdleComplete(): void; dispose(): void } {
  let phase: Phase = 'idle';
  let pending: { signal: AbortSignal; resolve: () => void; onAbort: () => void } | null = null;
  const finish = () => {
    if (!pending) return;
    const cycle = pending;
    pending = null;
    cycle.signal.removeEventListener('abort', cycle.onAbort);
    cycle.resolve();
  };
  const move = (next: Phase) => { phase = next; advance(next); };
  return {
    play(signal) {
      if (signal.aborted) return Promise.resolve();
      finish();
      return new Promise<void>(resolve => {
        const onAbort = () => { finish(); move('idle'); };
        pending = { signal, resolve, onAbort };
        signal.addEventListener('abort', onAbort, { once: true });
        onCycle();
        move('wave');
      });
    },
    reset() { finish(); move('idle'); },
    onWaveComplete() { if (phase === 'wave' && pending && !pending.signal.aborted) move('return'); },
    onIdleComplete() { if (phase === 'return' && pending && !pending.signal.aborted) { move('idle'); finish(); } },
    dispose() { finish(); },
  };
}

export default function VolumeCycle({ size, color, strokeWidth, register }: IconSvgProps) {
  const controls = useAnimation();
  useControlsDriver(register, controls);
  return <svg style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
    <motion.path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
    {['m22 9-6 6', 'm16 9 6 6'].map(d => <motion.path key={d} d={d} initial="normal" animate={controls} variants={{ normal: { opacity: 1, pathLength: 1 }, animate: { opacity: 0, pathLength: 0, transition: { duration: 0.2 } } }} />)}
    {['M16 9a5 5 0 0 1 0 6', 'M19.364 5.636a9 9 0 0 1 0 12.728'].map((d, index) => <motion.path key={d} d={d} initial="normal" animate={controls} variants={{ normal: { opacity: 0, pathLength: 0 }, animate: { opacity: 1, pathLength: 1, transition: { duration: 0.3, delay: 0.2 + index * 0.2 } } }} />)}
  </svg>;
}
