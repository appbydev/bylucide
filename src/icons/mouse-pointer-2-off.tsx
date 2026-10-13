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
      ><path d="m15.55 8.45 5.138 2.087a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063L8.45 15.551" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M22 2 2 22" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m6.816 11.528-2.779-6.84a.495.495 0 0 1 .651-.651l6.84 2.779" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
      </svg>);
}
