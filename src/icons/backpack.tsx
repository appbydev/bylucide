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
      ><path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M8 10h8" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M8 18h8" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
