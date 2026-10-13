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
      ><path d="M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <rect width="13" height="8" x="8" y="6" rx="1" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <circle cx="18" cy="20" r="2" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <circle cx="9" cy="20" r="2" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
