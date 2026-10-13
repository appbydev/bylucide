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
      ><rect width="16" height="6" x="2" y="2" rx="2" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <rect width="4" height="6" x="8" y="16" rx="1" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
      </svg>);
}
