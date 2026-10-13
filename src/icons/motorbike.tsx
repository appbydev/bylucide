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
      ><path d="m18 14-1-3" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m3 9 6 2a2 2 0 0 1 2-2h2a2 2 0 0 1 1.99 1.81" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M8 17h3a1 1 0 0 0 1-1 6 6 0 0 1 6-6 1 1 0 0 0 1-1v-.75A5 5 0 0 0 17 5" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <circle cx="19" cy="17" r="3" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <circle cx="5" cy="17" r="3" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
