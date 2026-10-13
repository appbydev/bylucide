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
      ><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m14 7 3 3" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M5 6v4" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M19 14v4" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M10 2v2" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M7 8H3" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="M21 16h-4" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
        <path d="M11 3H9" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
      </svg>);
}
