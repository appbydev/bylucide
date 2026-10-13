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
      ><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <rect width="20" height="14" x="2" y="6" rx="2" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
      </svg>);
}
