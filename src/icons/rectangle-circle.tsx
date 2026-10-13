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
      ><path d="M14 4v16H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <circle cx="14" cy="12" r="8" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
      </svg>);
}
