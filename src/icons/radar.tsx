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
      ><path d="M19.07 4.93A10 10 0 0 0 6.99 3.34" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M4 6h.01" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M12 18h.01" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <circle cx="12" cy="12" r="2" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
        <path d="m13.41 10.59 5.66-5.66" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
      </svg>);
}
