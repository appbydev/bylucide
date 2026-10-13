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
      ><path d="M11 12h.01" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M13 22c.5-.5 1.12-1 2.5-1-1.38 0-2-.5-2.5-1" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M14 2a3.28 3.28 0 0 1-3.227 1.798l-6.17-.561A2.387 2.387 0 1 0 4.387 8H15.5a1 1 0 0 1 0 13 1 1 0 0 0 0-5H12a7 7 0 0 1-7-7V8" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M14 8a8.5 8.5 0 0 1 0 8" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M16 16c2 0 4.5-4 4-6" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
