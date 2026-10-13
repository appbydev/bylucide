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
      ><path d="M10 9.5 8 12l2 2.5" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M14 21h1" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m14 9.5 2 2.5-2 2.5" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M9 21h1" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
