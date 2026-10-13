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
      ><path d="M12 18v4" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m17 18 1.956-11.468" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m3 8 7.82-5.615a2 2 0 0 1 2.36 0L21 8" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M4 18h16" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M7 18 5.044 6.532" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <circle cx="12" cy="10" r="2" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
      </svg>);
}
