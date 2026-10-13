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
      ><path d="M12 20v-9" className="al-primary al-anim-fill al-delay-0" style={{}} />
        <path d="M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z" className="al-secondary al-anim-fade al-delay-1" style={{}} />
        <path d="M14.12 3.88 16 2" className="al-primary al-anim-fade al-delay-2" style={{}} />
        <path d="M21 21a4 4 0 0 0-3.81-4" className="al-secondary al-anim-fade al-delay-3" style={{}} />
        <path d="M21 5a4 4 0 0 1-3.55 3.97" className="al-primary al-anim-fade al-delay-4" style={{}} />
        <path d="M22 13h-4" className="al-secondary al-anim-fade al-delay-5" style={{}} />
        <path d="M3 21a4 4 0 0 1 3.81-4" className="al-primary al-anim-fade al-delay-6" style={{}} />
        <path d="M3 5a4 4 0 0 0 3.55 3.97" className="al-secondary al-anim-fade al-delay-7" style={{}} />
        <path d="M6 13H2" className="al-primary al-anim-fade al-delay-7" style={{}} />
        <path d="m8 2 1.88 1.88" className="al-secondary al-anim-fade al-delay-7" style={{}} />
        <path d="M9 7.13V6a3 3 0 1 1 6 0v1.13" className="al-primary al-anim-fade al-delay-7" style={{}} />
      </svg>);
}
