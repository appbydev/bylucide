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
      ><circle cx="11" cy="4" r="2" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <circle cx="18" cy="8" r="2" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <circle cx="20" cy="16" r="2" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
