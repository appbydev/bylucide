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
      ><path d="m12 8 6-3-6-3v10" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m6.49 12.85 11.02 6.3" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M17.51 12.85 6.5 19.15" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
