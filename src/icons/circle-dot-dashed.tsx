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
      ><path d="M10.1 2.18a9.93 9.93 0 0 1 3.8 0" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M21.82 10.1a9.93 9.93 0 0 1 0 3.8" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M13.9 21.82a9.94 9.94 0 0 1-3.8 0" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="M2.18 13.9a9.93 9.93 0 0 1 0-3.8" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
        <path d="M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <circle cx="12" cy="12" r="1" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
      </svg>);
}
