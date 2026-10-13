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
      ><path d="m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <ellipse cx="12" cy="19" rx="9" ry="3" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
      </svg>);
}
