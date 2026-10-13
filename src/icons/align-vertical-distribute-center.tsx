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
      ><path d="M22 17h-3" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M22 7h-5" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M5 17H2" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M7 7H2" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <rect x="5" y="14" width="14" height="6" rx="2" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <rect x="7" y="4" width="10" height="6" rx="2" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
      </svg>);
}
