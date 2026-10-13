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
      ><path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <circle cx="12" cy="12" r="1" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
