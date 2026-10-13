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
      ><path d="M8 3.1V7a4 4 0 0 0 8 0V3.1" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m9 15-1-1" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m15 15 1-1" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="m8 19-2 3" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="m16 19 2 3" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
      </svg>);
}
