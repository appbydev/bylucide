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
      ><path d="M21 14h-1.343" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M9.128 3.47A9 9 0 0 1 21 12v3.343" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m2 2 20 20" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M20.414 20.414A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
