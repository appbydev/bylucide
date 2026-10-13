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
      ><path d="m3 8 4-4 4 4" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M7 4v16" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M20 8h-5" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M15 10V6.5a2.5 2.5 0 0 1 5 0V10" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M15 14h5l-5 6h5" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
