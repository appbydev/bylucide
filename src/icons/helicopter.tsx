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
      ><path d="M11 17v4" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M14 3v8a2 2 0 0 0 2 2h5.865" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M17 17v4" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M18 17a4 4 0 0 0 4-4 8 6 0 0 0-8-6 6 5 0 0 0-6 5v3a2 2 0 0 0 2 2z" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M2 10v5" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M6 3h16" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="M7 21h14" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
        <path d="M8 13H2" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
      </svg>);
}
