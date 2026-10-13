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
      ><path d="M7.001 15.085A1.5 1.5 0 0 1 9 16.5" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <circle cx="18.5" cy="8.5" r="3.5" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <circle cx="7.5" cy="16.5" r="5.5" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <circle cx="7.5" cy="4.5" r="2.5" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
