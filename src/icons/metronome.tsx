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
      ><path d="M12 11.4V9.1" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m12 17 6.59-6.59" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m15.05 5.7-.218-.691a3 3 0 0 0-5.663 0L4.418 19.695A1 1 0 0 0 5.37 21h13.253a1 1 0 0 0 .951-1.31L18.45 16.2" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <circle cx="20" cy="9" r="2" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
