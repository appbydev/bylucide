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
      ><circle cx="12" cy="12" r="8" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <line x1="3" x2="6" y1="3" y2="6" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <line x1="21" x2="18" y1="3" y2="6" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <line x1="3" x2="6" y1="21" y2="18" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <line x1="21" x2="18" y1="21" y2="18" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
