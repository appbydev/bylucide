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
      ><path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M5 21h14" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
      </svg>);
}
