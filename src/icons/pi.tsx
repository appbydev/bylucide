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
      ><line x1="9" x2="9" y1="4" y2="20" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M4 7c0-1.7 1.3-3 3-3h13" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M18 20c-1.7 0-3-1.3-3-3V4" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
      </svg>);
}
