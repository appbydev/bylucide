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
      ><path d="M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M3 8.7V19a2 2 0 0 0 2 2h10.3" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m2 2 20 20" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M13 13a3 3 0 1 0 0-6H9v2" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M9 17v-2.3" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
