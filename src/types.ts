import type { ComponentType, ForwardRefExoticComponent, RefAttributes } from 'react';
import type { LucideProps as UpstreamLucideProps } from 'lucide-react';

export interface IconDriver {
  play(signal: AbortSignal): Promise<void>;
  reset(): void;
}

export interface IconSvgProps {
  size: number | string;
  color?: string;
  strokeWidth: number | string;
  reduced?: boolean;
  register(driver: IconDriver | null): void;
}

export type IconSvg = ComponentType<IconSvgProps>;

export type NamedIconProps = Omit<IconProps, 'name'>;
export type IconComponent = ForwardRefExoticComponent<NamedIconProps & RefAttributes<SVGSVGElement>>;
export type LucideIcon = IconComponent;
export type LucideProps = NamedIconProps;
export interface IconProps extends Omit<UpstreamLucideProps, 'ref'> {
  name?: string;
  loop?: 'hover' | 'always' | false;
  /** Defaults to 'system' (follows prefers-reduced-motion); 'ignore' forces animations. */
  reducedMotion?: 'system' | 'ignore';
  /**
   * What starts a `loop="hover"` animation. 'parent' (default) uses the nearest interactive
   * ancestor (button, link, menu item, option, tab, `[data-icon-trigger]`) plus keyboard focus;
   * 'self' only reacts to the pointer over the icon itself.
   */
  trigger?: 'parent' | 'self';
}
