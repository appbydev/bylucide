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
      ><path d="M2 6h4" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M2 10h4" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M2 14h4" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M2 18h4" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <rect width="16" height="20" x="4" y="2" rx="2" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M9.5 8h5" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="M9.5 12H16" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
        <path d="M9.5 16H14" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
      </svg>);
}
