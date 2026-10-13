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
      ><path d="M12 22v-5" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M15 8V2" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M9 8V2" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
