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
      ><path d="M21 11.693V5" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m22 22-1.875-1.875" className="al-secondary al-anim-fill al-delay-1" style={{}} />
        <path d="M3 12a9 3 0 0 0 8.697 2.998" className="al-secondary al-anim-fill al-delay-2" style={{}} />
        <path d="M3 5v14a9 3 0 0 0 9.28 2.999" className="al-secondary al-anim-fill al-delay-3" style={{}} />
        <circle cx="18" cy="18" r="3" className="al-secondary al-anim-fill al-delay-4" style={{}} />
        <ellipse cx="12" cy="5" rx="9" ry="3" className="al-secondary al-anim-fill al-delay-5" style={{}} />
      </svg>);
}
