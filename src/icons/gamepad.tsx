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
      ><line x1="6" x2="10" y1="12" y2="12" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <line x1="8" x2="8" y1="10" y2="14" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <line x1="15" x2="15.01" y1="13" y2="13" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <line x1="18" x2="18.01" y1="11" y2="11" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <rect width="20" height="12" x="2" y="6" rx="2" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
