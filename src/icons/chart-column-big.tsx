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
      ><path d="M3 3v16a2 2 0 0 0 2 2h16" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <rect x="15" y="5" width="4" height="12" rx="1" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <rect x="7" y="8" width="4" height="9" rx="1" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
      </svg>);
}
