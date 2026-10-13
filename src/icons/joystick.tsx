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
      ><path d="M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M6 15v-2" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M12 15V9" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <circle cx="12" cy="6" r="3" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
