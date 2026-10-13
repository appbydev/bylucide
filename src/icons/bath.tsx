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
      ><path d="M10 4 8 6" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M17 19v2" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M2 12h20" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M7 19v2" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
