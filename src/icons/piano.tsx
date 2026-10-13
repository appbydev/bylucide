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
      ><path d="M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M2 14h20" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M6 14v4" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M10 14v4" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M14 14v4" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M18 14v4" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
      </svg>);
}
