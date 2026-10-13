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
      ><path d="M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M22 17v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <circle cx="8" cy="19" r="2" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
