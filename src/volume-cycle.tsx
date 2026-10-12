'use client';
import * as React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import type { IconSvgProps, IconDriver } from './icon-runtime';

/** Callbacks do Motion separados para que a transição de presença seja testável sem relógio. */
export function createVolumePhases(advance: (phase: 'wave' | 'return' | 'idle') => void, complete: () => void) {
  return {
    waveFinished(active: boolean) { if (active) advance('return'); },
    idleFinished(active: boolean) { if (active) { advance('idle'); complete(); } },
  };
}

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

/** Transição de presença original: linhas de mute → ondas → linhas de mute. */
export default function VolumeCycle({ size, color, strokeWidth, reduced, register }: IconSvgProps) {
  const [phase, setPhase] = React.useState<'idle' | 'wave' | 'return'>('idle');
  const [cycleNumber, setCycleNumber] = React.useState(0);
  const machine = React.useRef<ReturnType<typeof createVolumeController> | null>(null);
  React.useLayoutEffect(() => {
    const current = createVolumeController(setPhase, () => setCycleNumber(number => number + 1));
    machine.current = current;
    if (reduced) {
      register(null);
      return () => { current.dispose(); machine.current = null; };
    }
    register(current);
    return () => { current.dispose(); machine.current = null; register(null); };
  }, [register, reduced]);
  if (reduced) return <svg fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} style={{ color }} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
    <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
    <line x1="22" x2="16" y1="9" y2="15" />
    <line x1="16" x2="22" y1="9" y2="15" />
  </svg>;
  const waves = phase === 'wave';
  return <svg data-volume-cycle={cycleNumber} data-volume-phase={phase} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} style={{ color }} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
    <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
    <AnimatePresence initial={false} mode="wait">
      {waves ? <React.Fragment key="volume-icon-active">
        <motion.path animate={{ opacity: 1, transition: { delay: 0.1 } }} d="M16 9a5 5 0 0 1 0 6" exit={{ opacity: 0 }} initial={{ opacity: 0 }} />
        <motion.path animate={{ opacity: 1, transition: { delay: 0.2 } }} d="M19.364 18.364a9 9 0 0 0 0-12.728" exit={{ opacity: 0 }} initial={{ opacity: 0 }} onAnimationComplete={() => machine.current?.onWaveComplete()} />
      </React.Fragment> : <React.Fragment key="volume-icon-inactive">
        <motion.line animate={{ pathLength: [0, 1], opacity: [0, 1], transition: { delay: 0.1 } }} exit={{ pathLength: 1, opacity: 1 }} initial={{ pathLength: 1, opacity: 1 }} x1="22" x2="16" y1="9" y2="15" />
        <motion.line animate={{ pathLength: [0, 1], opacity: [0, 1], transition: { delay: 0.2 } }} exit={{ pathLength: 1, opacity: 1 }} initial={{ pathLength: 1, opacity: 1 }} onAnimationComplete={() => machine.current?.onIdleComplete()} x1="16" x2="22" y1="9" y2="15" />
      </React.Fragment>}
    </AnimatePresence>
  </svg>;
}
