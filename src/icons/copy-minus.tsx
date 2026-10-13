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
      ><line x1="12" x2="18" y1="15" y2="15" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <rect width="14" height="14" x="8" y="8" rx="2" ry="2" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
      </svg>);
}
