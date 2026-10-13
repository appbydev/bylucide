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
      ><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M2 21h13" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M3 9h11" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
