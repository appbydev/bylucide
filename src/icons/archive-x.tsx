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
      ><rect width="20" height="5" x="2" y="3" rx="1" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m9.5 17 5-5" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m9.5 12 5 5" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
