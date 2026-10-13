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
      ><rect x="14" y="14" width="8" height="8" rx="2" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <rect x="2" y="2" width="8" height="8" rx="2" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M7 14v1a2 2 0 0 0 2 2h1" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M14 7h1a2 2 0 0 1 2 2v1" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
