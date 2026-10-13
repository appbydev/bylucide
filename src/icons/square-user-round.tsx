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
      ><path d="M18 21a6 6 0 0 0-12 0" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <circle cx="12" cy="11" r="4" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <rect width="18" height="18" x="3" y="3" rx="2" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
      </svg>);
}
