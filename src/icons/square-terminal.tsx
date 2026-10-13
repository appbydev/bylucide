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
      ><path d="m7 11 2-2-2-2" className="al-primary al-anim-fill al-delay-0" style={{}} />
        <path d="M11 13h4" className="al-secondary al-anim-fade al-delay-1" style={{}} />
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" className="al-primary al-anim-fade al-delay-2" style={{}} />
      </svg>);
}
