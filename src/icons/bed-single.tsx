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
      ><path d="M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M3 18h18" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
      </svg>);
}
