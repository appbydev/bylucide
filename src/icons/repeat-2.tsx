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
      ><path d="m2 9 3-3 3 3" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M13 18H7a2 2 0 0 1-2-2V6" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m22 15-3 3-3-3" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M11 6h6a2 2 0 0 1 2 2v10" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
