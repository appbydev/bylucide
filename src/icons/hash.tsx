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
      ><line x1="4" x2="20" y1="9" y2="9" className="al-primary al-anim-fill al-delay-0" style={{}} />
        <line x1="4" x2="20" y1="15" y2="15" className="al-secondary al-anim-fade al-delay-1" style={{}} />
        <line x1="10" x2="8" y1="3" y2="21" className="al-secondary al-anim-fade al-delay-2" style={{}} />
        <line x1="16" x2="14" y1="3" y2="21" className="al-secondary al-anim-fade al-delay-3" style={{}} />
      </svg>);
}
