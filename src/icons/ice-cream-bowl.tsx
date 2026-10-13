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
      ><path d="M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M12.14 11a3.5 3.5 0 1 1 6.71 0" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M15.5 6.5a3.5 3.5 0 1 0-7 0" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
      </svg>);
}
