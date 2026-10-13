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
      ><path d="M17 10h-1a4 4 0 1 1 4-4v.534" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M17 6h1a4 4 0 0 1 1.42 7.74l-2.29.87a6 6 0 0 1-5.339-10.68l2.069-1.31" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M4.5 17c2.8-.5 4.4 0 5.5.8s1.8 2.2 2.3 3.7c-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M9.77 12C4 15 2 22 2 22" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <circle cx="17" cy="8" r="2" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
