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
      ><path d="M4 6 2 7" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M10 6h4" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m22 7-2-1" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <rect width="16" height="16" x="4" y="3" rx="2" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M4 11h16" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M8 15h.01" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="M16 15h.01" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
        <path d="M6 19v2" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <path d="M18 21v-2" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
      </svg>);
}
