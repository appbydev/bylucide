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
      ><circle cx="12" cy="12" r="10" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m4.93 4.93 4.24 4.24" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m14.83 9.17 4.24-4.24" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m14.83 14.83 4.24 4.24" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="m9.17 14.83-4.24 4.24" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <circle cx="12" cy="12" r="4" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
      </svg>);
}
