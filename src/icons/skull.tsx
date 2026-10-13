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
      ><path d="m12.5 17-.5-1-.5 1h1z" className="al-primary al-anim-fade al-delay-0" style={{}} />
        <path d="M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z" className="al-secondary al-anim-fade al-delay-1" style={{}} />
        <circle cx="15" cy="12" r="1" className="al-secondary al-anim-fill al-delay-2" style={{}} />
        <circle cx="9" cy="12" r="1" className="al-secondary al-anim-fill al-delay-3" style={{}} />
      </svg>);
}
