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
      ><path d="M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m7 15 3 3" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m7 21 3-3H5a2 2 0 0 1-2-2v-2" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <rect x="14" y="14" width="7" height="7" rx="1" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <rect x="3" y="3" width="7" height="7" rx="1" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
      </svg>);
}
