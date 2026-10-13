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
      ><path d="M16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m2 2 20 20" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M4 22V4" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M7.656 2H8c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10.347" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
