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
      ><path d="M2 10h6V4" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m2 4 6 6" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M21 10V7a2 2 0 0 0-2-2h-7" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M3 14v2a2 2 0 0 0 2 2h3" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <rect x="12" y="14" width="10" height="7" rx="1" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
