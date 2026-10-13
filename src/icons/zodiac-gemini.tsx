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
      ><path d="M16 4.525v14.948" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M20 3A17 17 0 0 1 4 3" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M4 21a17 17 0 0 1 16 0" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M8 4.525v14.948" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
