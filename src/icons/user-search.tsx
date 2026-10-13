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
      ><circle cx="10" cy="7" r="4" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M10.3 15H7a4 4 0 0 0-4 4v2" className="al-secondary al-anim-fill al-delay-1" style={{}} />
        <circle cx="17" cy="17" r="3" className="al-secondary al-anim-fill al-delay-2" style={{}} />
        <path d="m21 21-1.9-1.9" className="al-secondary al-anim-fill al-delay-3" style={{}} />
      </svg>);
}
