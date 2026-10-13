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
      ><path d="M8.43 8.43 3 11l8 2 2 8 2.57-5.43" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M17.39 11.73 22 2l-9.73 4.61" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <line x1="2" x2="22" y1="2" y2="22" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
      </svg>);
}
