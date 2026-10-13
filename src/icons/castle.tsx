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
      ><path d="M10 5V3" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M14 5V3" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M15 21v-3a3 3 0 0 0-6 0v3" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M18 3v8" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M18 5H6" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M22 11H2" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="M22 9v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
        <path d="M6 3v8" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
      </svg>);
}
