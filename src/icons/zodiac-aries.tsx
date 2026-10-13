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
      ><path d="M12 7.5a4.5 4.5 0 1 1 5 4.5" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M7 12a4.5 4.5 0 1 1 5-4.5V21" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
      </svg>);
}
