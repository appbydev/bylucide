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
      ><path d="M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M10 5H8a2 2 0 0 0 0 4h.68" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M14 5h2a2 2 0 0 1 0 4h-.68" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M18 22H6" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M9 2h6" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
      </svg>);
}
