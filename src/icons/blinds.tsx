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
      ><path d="M3 3h18" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M20 7H8" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M20 11H8" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M10 19h10" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M8 15h12" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M4 3v14" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <circle cx="4" cy="19" r="2" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
      </svg>);
}
