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
      ><path d="M10 19V5.5a1 1 0 0 1 5 0V17a2 2 0 0 0 2 2h5l-3-3" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m22 19-3 3" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M5 19V5.5a1 1 0 0 1 5 0" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M5 5.5A2.5 2.5 0 0 0 2.5 3" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
