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
      ><path d="m17 2 4 4-4 4" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M3 11v-1a4 4 0 0 1 4-4h14" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m7 22-4-4 4-4" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M21 13v1a4 4 0 0 1-4 4H3" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M11 10h1v4" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
