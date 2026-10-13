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
      ><path d="M12 7v14" className="al-primary al-anim-fill al-delay-0" style={{}} />
        <path d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" className="al-secondary al-anim-fade al-delay-1" style={{}} />
        <path d="M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5" className="al-secondary al-anim-fade al-delay-2" style={{}} />
        <rect x="3" y="7" width="18" height="4" rx="1" className="al-secondary al-anim-fade al-delay-3" style={{}} />
      </svg>);
}
