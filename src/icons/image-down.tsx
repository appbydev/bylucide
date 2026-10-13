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
      ><path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m14 19 3 3v-5.5" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m17 22 3-3" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <circle cx="9" cy="9" r="2" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
