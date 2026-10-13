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
      ><path d="M10 12h4" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M10 17h4" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M10 7h4" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M18 12h2" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M18 18h2" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M18 6h2" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="M4 12h2" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
        <path d="M4 18h2" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <path d="M4 6h2" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <rect x="6" y="2" width="12" height="20" rx="2" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
      </svg>);
}
