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
      ><path d="M15 10V9" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M15 15v-1" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M15 21v-2" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M15 5V3" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M9 10V9" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M9 15v-1" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="M9 21v-2" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
        <path d="M9 5V3" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <rect x="3" y="3" width="18" height="18" rx="2" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
      </svg>);
}
