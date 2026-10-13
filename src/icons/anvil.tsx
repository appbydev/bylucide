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
      ><path d="M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M9 12v5" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M15 12v5" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
