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
      ><rect width="18" height="18" x="3" y="3" rx="2" ry="2" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M9 11.2h5.7" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
      </svg>);
}
