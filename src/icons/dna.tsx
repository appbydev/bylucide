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
      ><path d="m10 16 1.5 1.5" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m14 8-1.5-1.5" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m16.5 10.5 1 1" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="m17 6-2.891-2.891" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M2 15c6.667-6 13.333 0 20-6" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="m20 9 .891.891" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
        <path d="M3.109 14.109 4 15" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <path d="m6.5 12.5 1 1" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <path d="m7 18 2.891 2.891" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
      </svg>);
}
