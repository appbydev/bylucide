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
      ><path d="M10 20v2" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M14 20v2" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M18 20v2" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M21 20H3" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M6 20v2" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <rect x="4" y="6" width="16" height="10" rx="2" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
      </svg>);
}
