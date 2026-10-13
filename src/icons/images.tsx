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
      ><path d="m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <circle cx="13" cy="7" r="1" fill="currentColor" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <rect x="8" y="2" width="14" height="14" rx="2" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
