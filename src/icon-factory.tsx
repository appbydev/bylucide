import * as React from 'react';
import type { LucideIcon } from 'lucide-react';
import { IconShell } from './icon-runtime';
import type { IconComponent, IconSvg, NamedIconProps } from './types';

/**
 * Builds a named icon. `svg` is the animated glyph and `fallback` the static Lucide
 * component; both are imported per icon so bundlers keep only the icons an app uses.
 */
export function createIcon(name: string, svg?: IconSvg, fallback?: LucideIcon): IconComponent {
  const Component = React.forwardRef<SVGSVGElement, NamedIconProps>((props, ref) => <IconShell {...props} ref={ref} name={name} svg={svg} fallback={fallback} />);
  Component.displayName = name.split('-').map(part => (part[0]?.toUpperCase() ?? '') + part.slice(1)).join('') + 'Icon';
  return Component;
}
