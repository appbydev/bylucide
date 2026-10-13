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
      ><path d="M9.31 9.31 5 21l7-4 7 4-1.17-3.17" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M14.53 8.88 12 2l-1.17 3.17" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <line x1="2" x2="22" y1="2" y2="22" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
      </svg>);
}
