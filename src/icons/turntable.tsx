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
      ><path d="M10 12.01h.01" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M18 8v4a8 8 0 0 1-1.07 4" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <circle cx="10" cy="12" r="4" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <rect x="2" y="4" width="20" height="16" rx="2" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
