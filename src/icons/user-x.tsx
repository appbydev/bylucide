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
      ><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" className="al-primary al-anim-fade al-delay-0" style={{}} />
        <circle cx="9" cy="7" r="4" className="al-secondary al-anim-fill al-delay-1" style={{}} />
        <line x1="17" x2="22" y1="8" y2="13" className="al-secondary al-anim-fade al-delay-2" style={{}} />
        <line x1="22" x2="17" y1="8" y2="13" className="al-secondary al-anim-fade al-delay-3" style={{}} />
      </svg>);
}
