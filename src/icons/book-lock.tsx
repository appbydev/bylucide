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
      ><path d="M18 6V4a2 2 0 1 0-4 0v2" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <rect x="12" y="6" width="8" height="5" rx="1" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
