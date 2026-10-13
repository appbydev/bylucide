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
      ><path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M4 12H2" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M10 12H8" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M16 12h-2" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M22 12h-2" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
      </svg>);
}
