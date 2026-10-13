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
      ><path d="M12 7.318V10" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M19 10v5a7 7 0 0 1-14 0V9c0-3.527 2.608-6.515 6-7" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <circle cx="17" cy="4" r="2" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
      </svg>);
}
