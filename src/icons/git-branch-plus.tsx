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
      ><path d="M6 3v12" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M15 6a9 9 0 0 0-9 9" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M18 15v6" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M21 18h-6" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
      </svg>);
}
