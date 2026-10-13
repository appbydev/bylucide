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
      ><path d="M16 2v2" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M8 2v2" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <circle cx="12" cy="11" r="3" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <rect x="3" y="4" width="18" height="18" rx="2" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
