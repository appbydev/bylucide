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
      ><polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <line x1="13" x2="19" y1="19" y2="13" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <line x1="16" x2="20" y1="16" y2="20" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <line x1="19" x2="21" y1="21" y2="19" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <line x1="5" x2="9" y1="14" y2="18" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <line x1="7" x2="4" y1="17" y2="20" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
        <line x1="3" x2="5" y1="19" y2="21" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
      </svg>);
}
