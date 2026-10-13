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
      ><path d="M11 5.5a1 1 0 0 1 5 0V16a5 5 0 0 0 5 5" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M16 11.5a1 1 0 0 1 5 0V16a5 5 0 0 1-5 5" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M6 19V6a3 3 0 0 0-3-3h0" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M6 5.5a1 1 0 0 1 5 0V19" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
