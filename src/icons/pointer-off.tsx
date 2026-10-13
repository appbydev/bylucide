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
      ><path d="M10 4.5V4a2 2 0 0 0-2.41-1.957" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M13.9 8.4a2 2 0 0 0-1.26-1.295" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M6 6v8" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="m2 2 20 20" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
      </svg>);
}
