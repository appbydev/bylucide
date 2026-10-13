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
      ><path d="M16 14v2.2l1.6 1" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M16 4h2a2 2 0 0 1 2 2v.832" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <circle cx="16" cy="16" r="6" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <rect x="8" y="2" width="8" height="4" rx="1" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
