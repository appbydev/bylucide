'use client';
import * as React from 'react';
import manifest from './icon-manifest.json';
import { iconRegistry } from './icon-registry';
import { IconShell } from './icon-runtime';
import type { IconProps } from './types';
export type { IconProps } from './types';
export { manifest };
export { createIcon } from './icon-factory';
export * from './icon-exports';

const aliases: Record<string, string> = manifest.aliases;
export function normalizeName(input: string) {
  if (/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(input)) return aliases[input] ?? input;
  const bare = input.endsWith('Icon') ? input.slice(0, -4) : input;
  const name = bare.replace(/([a-z0-9])([A-Z])/g, '$1-$2').replace(/([A-Z])([A-Z][a-z])/g, '$1-$2').replace(/([a-z])([0-9])/g, '$1-$2').replace(/([0-9])([a-z])/g, '$1-$2').replace(/-([0-9])([0-9])(?=$|-)/g, '-$1-$2').toLowerCase();
  return aliases[name] ?? name;
}

export const Icon = React.forwardRef<HTMLSpanElement, IconProps>(function Icon({ name = '', ...props }, ref) {
  const canonical = normalizeName(name);
  return <IconShell {...props} ref={ref} name={canonical} svg={iconRegistry[canonical]} />;
});
