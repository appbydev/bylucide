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
      ><path d="M10 2v2" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M14 2v4" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
