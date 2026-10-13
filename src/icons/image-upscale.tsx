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
      ><path d="M16 3h5v5" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M17 21h2a2 2 0 0 0 2-2" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M21 12v3" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m21 3-5 5" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M3 7V5a2 2 0 0 1 2-2" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="M9 3h3" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
        <rect x="3" y="11" width="10" height="10" rx="1" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
      </svg>);
}
