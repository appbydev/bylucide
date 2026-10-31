'use client';
import * as React from 'react';
import type { LegacyAnimationControls } from 'motion/react';
import { captureControls, createPhase, disposePhases, playPhase, type TimelinePhase } from './reversible-timeline';
import type { IconDriver, IconSvgProps } from './types';

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
