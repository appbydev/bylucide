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
      ><path d="m12 14-1 1" className="al-primary al-anim-fill al-delay-0" style={{}} />
        <path d="m13.75 18.25-1.25 1.42" className="al-secondary al-anim-fade al-delay-1" style={{}} />
        <path d="M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12" className="al-secondary al-anim-fade al-delay-2" style={{}} />
        <path d="M18.8 9.3a1 1 0 0 0 2.1 7.7" className="al-secondary al-anim-fade al-delay-3" style={{}} />
        <path d="M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z" className="al-secondary al-anim-fade al-delay-4" style={{}} />
      </svg>);
}
