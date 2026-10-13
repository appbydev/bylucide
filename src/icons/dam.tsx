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
      ><path d="M11 11.31c1.17.56 1.54 1.69 3.5 1.69 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M11.75 18c.35.5 1.45 1 2.75 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M2 10h4" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M2 14h4" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M2 18h4" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M2 6h4" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
      </svg>);
}
