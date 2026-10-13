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
      ><path d="M16 5H3" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M11 12H3" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M11 19H3" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M21 16V5" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <circle cx="18" cy="16" r="3" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
