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
      ><path d="M11 21a3 3 0 0 0 3-3V6.5a1 1 0 0 0-7 0" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M7 19V6a3 3 0 0 0-3-3h0" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <circle cx="17" cy="17" r="3" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
      </svg>);
}
