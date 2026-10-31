'use client';
import * as React from 'react';

const subscribe = (notify: () => void) => {
  if (typeof window === 'undefined' || !window.matchMedia) return () => {};
  const media = window.matchMedia('(prefers-reduced-motion: reduce)');
  media.addEventListener('change', notify);
  return () => media.removeEventListener('change', notify);
};

const snapshot = () =>
  typeof window !== 'undefined' && !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

export function useReduced() {
  return React.useSyncExternalStore(subscribe, snapshot, () => false);
}
