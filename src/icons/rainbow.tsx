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
      ><path d="M22 17a10 10 0 0 0-20 0" className="al-primary al-anim-fade al-delay-0" style={{}} />
        <path d="M6 17a6 6 0 0 1 12 0" className="al-secondary al-anim-fade al-delay-1" style={{}} />
        <path d="M10 17a2 2 0 0 1 4 0" className="al-secondary al-anim-fade al-delay-2" style={{}} />
      </svg>);
}
