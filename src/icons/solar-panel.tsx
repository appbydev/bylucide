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
      ><path d="M11 2h2" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m14.28 14-4.56 8" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m21 22-1.558-4H4.558" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M3 10v2" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M6.245 15.04A2 2 0 0 1 8 14h12a1 1 0 0 1 .864 1.505l-3.11 5.457A2 2 0 0 1 16 22H4a1 1 0 0 1-.863-1.506z" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M7 2a4 4 0 0 1-4 4" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="m8.66 7.66 1.41 1.41" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
      </svg>);
}
