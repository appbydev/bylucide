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
      ><path d="M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <line x1="16" x2="22" y1="5" y2="5" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <circle cx="9" cy="9" r="2" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
