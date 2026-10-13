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
      ><path d="m10 9-3 3 3 3" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m14 15 3-3-3-3" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <rect x="3" y="3" width="18" height="18" rx="2" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
      </svg>);
}
