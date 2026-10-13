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
      ><circle cx="12" cy="5" r="1" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m9 20 3-6 3 6" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m6 8 6 2 6-2" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M12 10v4" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
