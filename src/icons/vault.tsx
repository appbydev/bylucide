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
      ><rect width="18" height="18" x="3" y="3" rx="2" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m7.9 7.9 2.7 2.7" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <circle cx="16.5" cy="7.5" r=".5" fill="currentColor" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="m13.4 10.6 2.7-2.7" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <circle cx="7.5" cy="16.5" r=".5" fill="currentColor" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="m7.9 16.1 2.7-2.7" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
        <circle cx="16.5" cy="16.5" r=".5" fill="currentColor" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <path d="m13.4 13.4 2.7 2.7" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <circle cx="12" cy="12" r="2" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
      </svg>);
}
