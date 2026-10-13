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
      ><path d="M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M15 3v5a1 1 0 0 0 1 1h5" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M8 13h.01" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M16 13h.01" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M10 16s.8 1 2 1c1.3 0 2-1 2-1" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
