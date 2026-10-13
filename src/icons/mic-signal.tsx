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
      ><path d="M13 17a1 1 0 1 0-2 0l.5 4.5a0.5 0.5 0 0 0 1 0z" fill="currentColor" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M16.85 18.58a9 9 0 1 0-9.7 0" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M8 14a5 5 0 1 1 8 0" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <circle cx="12" cy="11" r="1" fill="currentColor" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
