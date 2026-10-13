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
      ><path d="M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <line x1="4" x2="20" y1="12" y2="12" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
      </svg>);
}
