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
      ><path d="M16 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M8 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
      </svg>);
}
