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
      ><path d="M9 17H7A5 5 0 0 1 7 7" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M15 7h2a5 5 0 0 1 4 8" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <line x1="8" x2="12" y1="12" y2="12" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <line x1="2" x2="22" y1="2" y2="22" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
