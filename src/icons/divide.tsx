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
      ><circle cx="12" cy="6" r="1" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <line x1="5" x2="19" y1="12" y2="12" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <circle cx="12" cy="18" r="1" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
      </svg>);
}
