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
      ><path d="M8 2v4" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M16 2v4" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <rect width="18" height="18" x="3" y="4" rx="2" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M3 10h18" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M10 16h4" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
