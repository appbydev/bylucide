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
      ><path d="m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <rect width="20" height="4" x="2" y="11" rx="1" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
