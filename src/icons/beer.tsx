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
      ><path d="M17 11h1a3 3 0 0 1 0 6h-1" className="al-primary al-anim-fill al-delay-0" style={{}} />
        <path d="M9 12v6" className="al-secondary al-anim-fade al-delay-1" style={{}} />
        <path d="M13 12v6" className="al-secondary al-anim-fade al-delay-2" style={{}} />
        <path d="M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z" className="al-secondary al-anim-fade al-delay-3" style={{}} />
        <path d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" className="al-secondary al-anim-fade al-delay-4" style={{}} />
      </svg>);
}
