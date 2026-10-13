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
      ><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M2 6h4" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M2 10h4" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M2 14h4" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M2 18h4" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
      </svg>);
}
