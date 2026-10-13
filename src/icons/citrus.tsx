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
      ><path d="M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M19.65 15.66A8 8 0 0 1 8.35 4.34" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m14 10-5.5 5.5" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M14 17.85V10H6.15" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
