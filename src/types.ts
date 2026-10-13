import type { HTMLAttributes } from 'react';
export interface IconProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'> {
  name?: string;
  loop?: 'hover' | 'always' | false;
  /** Defaults to 'ignore' (force animations); 'system' follows prefers-reduced-motion. */
  reducedMotion?: 'system' | 'ignore';
  size?: number;
  color?: string;
  strokeWidth?: number;
}
