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
      ><path d="M10.268 21a2 2 0 0 0 3.464 0" className="al-primary al-anim-bell-ring al-delay-0" style={{}} />
        <path d="M15 8h6" className="al-secondary al-anim-fade al-delay-1" style={{}} />
        <path d="M18 5v6" className="al-secondary al-anim-fade al-delay-2" style={{}} />
        <path d="M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332" className="al-secondary al-anim-fade al-delay-3" style={{}} />
      </svg>);
}
