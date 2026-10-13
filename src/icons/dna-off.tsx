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
      ><path d="M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m17 6-2.891-2.891" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M2 15c3.333-3 6.667-3 10-3" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m2 2 20 20" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="m20 9 .891.891" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="M3.109 14.109 4 15" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
        <path d="m6.5 12.5 1 1" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <path d="m7 18 2.891 2.891" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <path d="M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
      </svg>);
}
