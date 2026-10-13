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
      ><path d="M10 2v6.292a7 7 0 1 0 4 0V2" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M5 15h14" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M8.5 2h7" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
      </svg>);
}
