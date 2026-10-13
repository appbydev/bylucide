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
      ><path d="M3 7V5c0-1.1.9-2 2-2h2" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M17 3h2c1.1 0 2 .9 2 2v2" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M21 17v2c0 1.1-.9 2-2 2h-2" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <rect width="7" height="5" x="7" y="7" rx="1" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <rect width="7" height="5" x="10" y="12" rx="1" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
      </svg>);
}
