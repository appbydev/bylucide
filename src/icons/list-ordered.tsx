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
      ><path d="M11 5h10" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M11 12h10" className="al-secondary al-anim-fade al-delay-1" style={{}} />
        <path d="M11 19h10" className="al-secondary al-anim-fade al-delay-2" style={{}} />
        <path d="M4 4h1v5" className="al-secondary al-anim-fade al-delay-3" style={{}} />
        <path d="M4 9h2" className="al-secondary al-anim-fade al-delay-4" style={{}} />
        <path d="M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02" className="al-secondary al-anim-fade al-delay-5" style={{}} />
      </svg>);
}
