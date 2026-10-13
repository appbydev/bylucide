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
      ><path d="M21 14.5A9 6.5 0 0 1 5.5 19" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M3 9.5A9 6.5 0 0 1 18.5 5" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <circle cx="17.5" cy="14.5" r="3.5" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <circle cx="6.5" cy="9.5" r="3.5" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
