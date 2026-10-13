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
      ><rect width="8" height="4" x="8" y="2" rx="1" ry="1" className="al-primary al-anim-fill al-delay-0" style={{}} />
        <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" className="al-secondary al-anim-fade al-delay-1" style={{}} />
        <path d="M16 4h2a2 2 0 0 1 2 2v4" className="al-secondary al-anim-fade al-delay-2" style={{}} />
        <path d="M21 14H11" className="al-secondary al-anim-fade al-delay-3" style={{}} />
        <path d="m15 10-4 4 4 4" className="al-secondary al-anim-fade al-delay-4" style={{}} />
      </svg>);
}
