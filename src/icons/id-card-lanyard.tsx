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
      ><path d="M13.5 8h-3" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m15 2-1 2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M16.899 22A5 5 0 0 0 7.1 22" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m9 2 3 6" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <circle cx="12" cy="15" r="3" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
