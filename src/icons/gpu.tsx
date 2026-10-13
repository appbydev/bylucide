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
      ><path d="M2 21V3" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M2 5h18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2.26" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M7 17v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <circle cx="16" cy="11" r="2" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <circle cx="8" cy="11" r="2" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
