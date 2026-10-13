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
      ><path d="M10 2h4" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M7 14h.01" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M17 14h.01" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <rect width="18" height="8" x="3" y="10" rx="2" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M5 18v2" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="M19 18v2" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
      </svg>);
}
