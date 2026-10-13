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
      ><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" className="al-primary al-anim-fill al-delay-0" style={{}} />
        <path d="m10 15-3-3 3-3" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M7 12h8a2 2 0 0 1 2 2v1" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
      </svg>);
}
