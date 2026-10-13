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
      ><path d="m11 19-6-6" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m5 21-2-2" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m8 16-4 4" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M9.5 17.5 21 6V3h-3L6.5 14.5" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
