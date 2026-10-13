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
      ><path d="M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M2 12h8.5" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M20 6V4a2 2 0 1 0-4 0v2" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <rect width="8" height="5" x="14" y="6" rx="1" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
