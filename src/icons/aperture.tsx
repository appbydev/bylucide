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
      ><circle cx="12" cy="12" r="10" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m14.31 8 5.74 9.94" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M9.69 8h11.48" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m7.38 12 5.74-9.94" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M9.69 16 3.95 6.06" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M14.31 16H2.83" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="m16.62 12-5.74 9.94" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
      </svg>);
}
