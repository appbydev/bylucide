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
      ><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" className="al-primary al-anim-fill al-delay-0" style={{}} />
        <path d="M12 22V12" className="al-secondary al-anim-fade al-delay-1" style={{}} />
        <polyline points="3.29 7 12 12 20.71 7" className="al-secondary al-anim-fade al-delay-2" style={{}} />
        <path d="m7.5 4.27 9 5.15" className="al-secondary al-anim-fade al-delay-3" style={{}} />
      </svg>);
}
