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
      ><path d="m13.5 8.5-5 5" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <circle cx="11" cy="11" r="8" className="al-secondary al-anim-fill al-delay-1" style={{}} />
        <path d="m21 21-4.3-4.3" className="al-secondary al-anim-fill al-delay-2" style={{}} />
      </svg>);
}
