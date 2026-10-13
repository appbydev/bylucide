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
      ><path d="m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M4.82 7.9 8 10" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M15.18 7.9 12 10" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M16.93 10H20a2 2 0 0 1 0 4H2" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
