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
      ><path d="M14 21v-3a2 2 0 0 0-4 0v3" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M18 5v16" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M6 5v16" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <circle cx="12" cy="9" r="2" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
      </svg>);
}
