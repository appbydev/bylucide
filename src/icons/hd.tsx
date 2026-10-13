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
      ><path d="M10 12H6" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M10 15V9" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M14 14.5a.5.5 0 0 0 .5.5h1a2.5 2.5 0 0 0 2.5-2.5v-1A2.5 2.5 0 0 0 15.5 9h-1a.5.5 0 0 0-.5.5z" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M6 15V9" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <rect x="2" y="5" width="20" height="14" rx="2" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
