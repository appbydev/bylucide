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
      ><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M10 19v-3.96 3.15" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M7 19h5" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <rect width="6" height="10" x="16" y="12" rx="2" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
