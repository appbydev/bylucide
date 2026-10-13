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
      ><path d="M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M9 3.4a4 4 0 0 1 6.52.66" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M20.3 20.3a4 4 0 0 1-2.3.7" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M18.6 13a4 4 0 0 1 3.357 3.414" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="m12 6 .6 1" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="m2 2 20 20" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
      </svg>);
}
