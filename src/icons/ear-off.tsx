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
      ><path d="M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M6 8.5c0-.75.13-1.47.36-2.14" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <line x1="2" x2="22" y1="2" y2="22" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
