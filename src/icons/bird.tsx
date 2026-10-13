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
      ><path d="M16 7h.01" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m20 7 2 .5-2 .5" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M10 18v3" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M14 17.75V21" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M7 18a6 6 0 0 0 3.84-10.61" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
      </svg>);
}
