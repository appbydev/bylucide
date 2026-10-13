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
      ><path d="M11 20H2" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M11 4H8a2 2 0 0 0-2 2v14" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M14 12h.01" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M22 20h-3" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
