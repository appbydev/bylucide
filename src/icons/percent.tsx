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
      ><line x1="19" x2="5" y1="5" y2="19" className="al-primary al-anim-fill al-delay-0" style={{}} />
        <circle cx="6.5" cy="6.5" r="2.5" className="al-secondary al-anim-fade al-delay-1" style={{}} />
        <circle cx="17.5" cy="17.5" r="2.5" className="al-secondary al-anim-fade al-delay-2" style={{}} />
      </svg>);
}
