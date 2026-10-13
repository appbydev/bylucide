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
      ><path d="M10 10h4" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M 22 16 L 2 16" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
      </svg>);
}
