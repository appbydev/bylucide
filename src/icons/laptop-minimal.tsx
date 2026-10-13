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
      ><rect width="18" height="12" x="3" y="4" rx="2" ry="2" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <line x1="2" x2="22" y1="20" y2="20" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
      </svg>);
}
