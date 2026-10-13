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
      ><path d="m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <line x1="8" x2="8" y1="2" y2="5" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <line x1="2" x2="5" y1="8" y2="8" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <line x1="16" x2="16" y1="19" y2="22" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <line x1="19" x2="22" y1="16" y2="16" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
      </svg>);
}
