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
      ><path d="M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M7 22h1a4 4 0 0 0 4-4v-1" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M7 2h1a4 4 0 0 1 4 4v1" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
      </svg>);
}
