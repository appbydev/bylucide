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
      ><path d="M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11" className="al-primary al-anim-fill al-delay-0" style={{}} />
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z" className="al-secondary al-anim-fade al-delay-1" style={{}} />
        <path d="M6 13h12" className="al-secondary al-anim-fade al-delay-2" style={{}} />
        <path d="M6 17h12" className="al-secondary al-anim-fade al-delay-3" style={{}} />
      </svg>);
}
