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
      ><path d="M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M3 2h7" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M14 2h7" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M9 16H4" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M20 16h-5" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
      </svg>);
}
