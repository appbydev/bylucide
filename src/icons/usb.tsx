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
      ><circle cx="10" cy="7" r="1" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <circle cx="4" cy="20" r="1" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M4.7 19.3 19 5" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m21 3-3 1 2 2Z" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M9.26 7.68 5 12l2 5" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="m10 14 5 2 3.5-3.5" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="m18 12 1-1 1 1-1 1Z" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
      </svg>);
}
