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
      ><rect width="20" height="14" x="2" y="3" rx="2" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <line x1="8" x2="16" y1="21" y2="21" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <line x1="12" x2="12" y1="17" y2="21" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
      </svg>);
}
