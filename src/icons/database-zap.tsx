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
      ><ellipse cx="12" cy="5" rx="9" ry="3" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M3 5V19A9 3 0 0 0 15 21.84" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M21 5V8" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M21 12L18 17H22L19 22" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M3 12A9 3 0 0 0 14.59 14.87" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
