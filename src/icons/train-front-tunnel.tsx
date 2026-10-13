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
      ><path d="M2 22V12a10 10 0 1 1 20 0v10" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M10 15h.01" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M14 15h.01" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="m9 19-2 3" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="m15 19 2 3" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
      </svg>);
}
