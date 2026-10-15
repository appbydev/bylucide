import * as React from 'react';
import { Icon } from './index';
import type { IconComponent, NamedIconProps } from './types';
export function createIcon(name: string): IconComponent {
  const Component = React.forwardRef<SVGSVGElement, NamedIconProps>((props, ref) => <Icon {...props} name={name} ref={ref} />);
  Component.displayName = name.split('-').map(part => (part[0]?.toUpperCase() ?? '') + part.slice(1)).join('') + 'Icon';
  return Component;
}
