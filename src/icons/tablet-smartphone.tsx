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
      ><rect width="10" height="14" x="3" y="8" rx="2" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M8 18h.01" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
      </svg>);
}
