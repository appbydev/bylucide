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
      ><path d="M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m12 13.5 3.794.506" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m3.173 8.18 11-5a2 2 0 0 1 2.647.993L18.56 8" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M6 10V8" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M6 14v1" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M6 19v2" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <rect x="2" y="8" width="20" height="13" rx="2" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
      </svg>);
}
