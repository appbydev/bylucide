import * as React from 'react';
import { Icon } from './index';
import type { IconProps } from './types';
export function createIcon(name: string) {
  const Component = React.forwardRef<HTMLSpanElement, Omit<IconProps, 'name'>>((props, ref) => <Icon {...props} name={name} ref={ref} />);
  Component.displayName = name.split('-').map(part => part[0]!.toUpperCase() + part.slice(1)).join('') + 'Icon';
  return Component;
}
