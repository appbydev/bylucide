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
      ><path d="M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M21 15.5V6a2 2 0 0 0-2-2H9.5" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M16 2v4" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M3 10h7" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M21 10h-5.5" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="m2 2 20 20" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
      </svg>);
}
