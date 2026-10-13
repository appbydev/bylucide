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
      ><path d="M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M9 18h8" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M18 3h-3" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M11 3a6 6 0 0 0-6 6v11" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M5 13h4" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
      </svg>);
}
