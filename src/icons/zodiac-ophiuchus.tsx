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
      ><path d="M3 10A6.06 6.06 0 0 1 12 10 A6.06 6.06 0 0 0 21 10" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M6 3v12a6 6 0 0 0 12 0V3" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
      </svg>);
}
