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
      ><path d="m16 16-4 4-4-4" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M3 12h18" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m8 8 4-4 4 4" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
      </svg>);
}
