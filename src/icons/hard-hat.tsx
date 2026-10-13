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
      ><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M14 6a6 6 0 0 1 6 6v3" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M4 15v-3a6 6 0 0 1 6-6" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <rect x="2" y="15" width="20" height="4" rx="1" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
