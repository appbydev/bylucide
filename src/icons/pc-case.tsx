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
      ><rect width="14" height="20" x="5" y="2" rx="2" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M15 14h.01" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M9 6h6" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M9 10h6" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
