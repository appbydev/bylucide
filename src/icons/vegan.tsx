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
      ><path d="M16 8q6 0 6-6-6 0-6 6" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M17.41 3.59a10 10 0 1 0 3 3" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
      </svg>);
}
