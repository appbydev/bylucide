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
      ><rect width="20" height="16" x="2" y="4" rx="2" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <circle cx="8" cy="10" r="2" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M8 12h8" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <circle cx="16" cy="10" r="2" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
