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
      ><path d="m18 14 4 4-4 4" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m18 2 4 4-4 4" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M2 6h1.972a4 4 0 0 1 3.6 2.2" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
