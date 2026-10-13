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
      ><path d="M6.87 6.87a8 8 0 1 0 11.26 11.26" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M19.9 14.25a8 8 0 0 0-9.15-9.15" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m22 6-3-3" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M6.26 18.67 4 21" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="m2 2 20 20" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M4 4 2 6" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
      </svg>);
}
