'use client';
import * as React from 'react';
import manifest from './icon-manifest.json';
import { iconRegistry } from './icon-registry';
import { IconShell } from './icon-runtime';
import type { IconProps } from './types';
export type { IconProps, IconComponent, NamedIconProps, LucideIcon, LucideProps } from './types';
export { manifest };
export { createIcon } from './icon-factory';
export * from './icon-exports';

import { lucideNames } from './lucide-catalog';
/** Resolve official Lucide names/aliases; unknown names stay unknown and render null. */
export function normalizeName(input: string) {
  return Object.hasOwn(lucideNames, input) ? lucideNames[input]! : input;
}

export const Icon = React.forwardRef<SVGSVGElement, IconProps>(function Icon({ name = '', ...props }, ref) {
  const canonical = normalizeName(name);
  return <IconShell {...props} ref={ref} name={canonical} svg={Object.hasOwn(iconRegistry, canonical) ? iconRegistry[canonical] : undefined} />;
});
