import type { HTMLAttributes } from 'react';
export interface IconProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'> {
  name?: string;
  loop?: 'hover' | 'always' | false;
  size?: number;
  color?: string;
  strokeWidth?: number;
}
