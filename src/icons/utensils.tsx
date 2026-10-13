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
      ><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" className="al-primary al-anim-fill al-delay-0" style={{}} />
        <path d="M7 2v20" className="al-secondary al-anim-fade al-delay-1" style={{}} />
        <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" className="al-secondary al-anim-fade al-delay-2" style={{}} />
      </svg>);
}
