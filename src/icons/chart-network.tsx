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
      ><path d="m13.11 7.664 1.78 2.672" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m14.162 12.788-3.324 1.424" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m20 4-6.06 1.515" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M3 3v16a2 2 0 0 0 2 2h16" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <circle cx="12" cy="6" r="2" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <circle cx="16" cy="12" r="2" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <circle cx="9" cy="15" r="2" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
      </svg>);
}
