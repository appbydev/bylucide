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
      ><path d="M4 14h6" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M4 2h10" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <rect x="4" y="18" width="16" height="4" rx="1" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <rect x="4" y="6" width="16" height="4" rx="1" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
