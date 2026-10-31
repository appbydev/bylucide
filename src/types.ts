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
  /** Defaults to 'ignore' (force animations); 'system' follows prefers-reduced-motion. */
  reducedMotion?: 'system' | 'ignore';
}
