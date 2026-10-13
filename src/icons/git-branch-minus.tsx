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
      ><path d="M15 6a9 9 0 0 0-9 9V3" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M21 18h-6" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <circle cx="18" cy="6" r="3" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <circle cx="6" cy="18" r="3" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
