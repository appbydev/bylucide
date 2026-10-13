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
      ><path d="M13.744 17.736a6 6 0 1 1-7.48-7.48" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M15 6h1v4" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m6.134 14.768.866-.5 2 3.464" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <circle cx="16" cy="8" r="6" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
