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
      ><circle cx="10" cy="8" r="5" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M2 21a8 8 0 0 1 10.434-7.62" className="al-secondary al-anim-fill al-delay-1" style={{}} />
        <circle cx="18" cy="18" r="3" className="al-secondary al-anim-fill al-delay-2" style={{}} />
        <path d="m22 22-1.9-1.9" className="al-secondary al-anim-fill al-delay-3" style={{}} />
      </svg>);
}
