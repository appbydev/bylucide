import type { HTMLAttributes, ForwardRefExoticComponent, RefAttributes } from 'react';
/** Named exports use the same span shell/ref as Icon (not an SVG ref). */
export type NamedIconProps = Omit<IconProps, 'name'>;
export type IconComponent = ForwardRefExoticComponent<NamedIconProps & RefAttributes<HTMLSpanElement>>;
/** Migration aliases describing bylucide's span-based contract. */
export type LucideIcon = IconComponent;
export type LucideProps = NamedIconProps;
export interface IconProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'> {
  name?: string;
  loop?: 'hover' | 'always' | false;
  /** Defaults to 'ignore' (force animations); 'system' follows prefers-reduced-motion. */
  reducedMotion?: 'system' | 'ignore';
  size?: number;
  color?: string;
  strokeWidth?: number;
}
