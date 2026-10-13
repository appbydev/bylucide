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
      ><path d="M10 6.6 8.6 8" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M12 18v4" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M15 7.5 9.5 13" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M7 22h10" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <circle cx="12" cy="10" r="8" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
