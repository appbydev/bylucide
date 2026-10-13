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
      ><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M9.2 9.2h.01" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m14.5 9.5-5 5" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M14.7 14.8h.01" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
