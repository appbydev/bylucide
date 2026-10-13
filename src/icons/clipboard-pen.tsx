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
      ><path d="M16 4h2a2 2 0 0 1 2 2v2" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M21.34 15.664a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M8 22H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <rect x="8" y="2" width="8" height="4" rx="1" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
