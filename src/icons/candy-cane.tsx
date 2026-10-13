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
      ><path d="M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M17.75 7 15 2.1" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M10.9 4.8 13 9" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m7.9 9.7 2 4.4" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M4.9 14.7 7 18.9" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
