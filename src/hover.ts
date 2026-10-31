'use client';
import * as React from 'react';

export interface HoverState {
  hovered: boolean;
  setHovered: React.Dispatch<React.SetStateAction<boolean>>;
}

export function useHover(): HoverState {
  const [hovered, setHovered] = React.useState(false);
  return { hovered, setHovered };
}
