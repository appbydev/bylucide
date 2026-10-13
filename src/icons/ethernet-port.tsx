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
      ><path d="m15 20 3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3z" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M6 8v1" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M10 8v1" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M14 8v1" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M18 8v1" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
