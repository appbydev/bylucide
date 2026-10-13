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
      ><path d="M16 12v4" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M16 6a2 2 0 0 1 1.414.586l4 4A2 2 0 0 1 22 12v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 .586-1.414l4-4A2 2 0 0 1 8 6z" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M2 14h20" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M8 12v4" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
