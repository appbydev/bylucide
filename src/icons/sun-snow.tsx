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
      ><path d="M10 21v-1" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M10 4V3" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M10 9a3 3 0 0 0 0 6" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m14 20 1.25-2.5L18 18" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="m14 4 1.25 2.5L18 6" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="m17 21-3-6 1.5-3H22" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="m17 3-3 6 1.5 3" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
        <path d="M2 12h1" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <path d="m20 10-1.5 2 1.5 2" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <path d="m3.64 18.36.7-.7" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <path d="m4.34 6.34-.7-.7" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
      </svg>);
}
