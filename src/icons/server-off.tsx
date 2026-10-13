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
      ><path d="M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M22 17v-1a2 2 0 0 0-2-2h-1" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M6 18h.01" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="m2 2 20 20" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
      </svg>);
}
