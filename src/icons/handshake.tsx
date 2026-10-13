'use client';
import type { IconSvgProps } from '../icon-runtime';
import { useCssHoverDriver } from '../icon-runtime';

export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
  const ref = useCssHoverDriver(register);
  return (<svg ref={ref} style={{ color }}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      ><path d="m11 17 2 2a1 1 0 1 0 3-3" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m21 3 1 11h-2" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M3 4h8" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
