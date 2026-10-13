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
      ><path d="M10 3a41 41 0 0 0 0 18" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M14 3a41 41 0 0 1 0 18" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M17 3a2 2 0 0 1 1.68.92 15.25 15.25 0 0 1 0 16.16A2 2 0 0 1 17 21H7a2 2 0 0 1-1.68-.92 15.25 15.25 0 0 1 0-16.16A2 2 0 0 1 7 3z" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M3.84 17h16.32" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M3.84 7h16.32" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
