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
      ><path d="M3 5h1" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M3 12h1" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M3 19h1" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M8 5h1" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M8 12h1" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M8 19h1" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="M13 5h8" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
        <path d="M13 12h8" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <path d="M13 19h8" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
      </svg>);
}
