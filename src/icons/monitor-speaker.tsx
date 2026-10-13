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
      ><path d="M5.5 20H8" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M17 9h.01" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <rect width="10" height="16" x="12" y="4" rx="2" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <circle cx="17" cy="15" r="1" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
