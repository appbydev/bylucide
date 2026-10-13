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
      ><path d="M4 12h8" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M4 18V6" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M12 18V6" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
