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
      ><path d="m2 2 20 20" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M20 14.347V14c0-6-4-12-8-12-1.078 0-2.157.436-3.157 1.19" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M6.206 6.21C4.871 8.4 4 11.2 4 14a8 8 0 0 0 14.568 4.568" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
      </svg>);
}
