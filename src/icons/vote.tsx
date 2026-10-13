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
      ><path d="m9 12 2 2 4-4" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M22 19H2" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
      </svg>);
}
