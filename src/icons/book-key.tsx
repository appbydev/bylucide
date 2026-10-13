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
      ><path d="M13 2H6.5A2.5 2.5 0 0 0 4 4.5v15" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M17 2v6" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M17 4h2" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M20 15.2V21a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <circle cx="17" cy="10" r="2" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
