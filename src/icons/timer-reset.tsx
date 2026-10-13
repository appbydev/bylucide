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
      ><path d="M10 2h4" className="al-primary al-anim-fill al-delay-0" style={{}} />
        <path d="M12 14v-4" className="al-secondary al-anim-fade al-delay-1" style={{}} />
        <path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6" className="al-secondary al-anim-fade al-delay-2" style={{}} />
        <path d="M9 17H4v5" className="al-secondary al-anim-fade al-delay-3" style={{}} />
      </svg>);
}
