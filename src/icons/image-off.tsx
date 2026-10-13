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
      ><line x1="2" x2="22" y1="2" y2="22" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M10.41 10.41a2 2 0 1 1-2.83-2.83" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <line x1="13.5" x2="6" y1="13.5" y2="21" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <line x1="18" x2="21" y1="12" y2="15" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M21 15V5a2 2 0 0 0-2-2H9" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
      </svg>);
}
