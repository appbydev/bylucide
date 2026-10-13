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
      ><circle cx="19" cy="5" r="2" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <circle cx="5" cy="19" r="2" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M5 17A12 12 0 0 1 17 5" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
      </svg>);
}
