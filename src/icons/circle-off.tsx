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
      ><path d="m2 2 20 20" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M8.35 2.69A10 10 0 0 1 21.3 15.65" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M19.08 19.08A10 10 0 1 1 4.92 4.92" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
      </svg>);
}
