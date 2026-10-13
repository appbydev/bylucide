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
      ><path d="m10 20-1.25-2.5L6 18" className="al-primary al-anim-fade al-delay-0" style={{}} />
        <path d="M10 4 8.75 6.5 6 6" className="al-secondary al-anim-fade al-delay-1" style={{}} />
        <path d="M10.585 15H10" className="al-secondary al-anim-fade al-delay-2" style={{}} />
        <path d="M2 12h6.5L10 9" className="al-secondary al-anim-fade al-delay-3" style={{}} />
        <path d="M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" className="al-secondary al-anim-fade al-delay-4" style={{}} />
        <path d="m4 10 1.5 2L4 14" className="al-secondary al-anim-fade al-delay-5" style={{}} />
        <path d="m7 21 3-6-1.5-3" className="al-secondary al-anim-fade al-delay-6" style={{}} />
        <path d="m7 3 3 6h2" className="al-secondary al-anim-fade al-delay-7" style={{}} />
      </svg>);
}
