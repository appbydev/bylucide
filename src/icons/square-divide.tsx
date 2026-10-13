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
      ><rect width="18" height="18" x="3" y="3" rx="2" ry="2" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <line x1="8" x2="16" y1="12" y2="12" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <line x1="12" x2="12" y1="16" y2="16" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <line x1="12" x2="12" y1="8" y2="8" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
