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
      ><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m9 8 3 3v7" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m12 11 3-3" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M9 12h6" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M9 16h6" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
