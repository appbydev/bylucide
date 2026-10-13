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
      ><path d="m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <circle cx="10" cy="8" r="2" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
      </svg>);
}
