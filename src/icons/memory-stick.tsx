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
      ><path d="M12 12v-2" className="al-primary al-anim-fill al-delay-0" style={{}} />
        <path d="M12 18v-2" className="al-secondary al-anim-fade al-delay-1" style={{}} />
        <path d="M16 12v-2" className="al-primary al-anim-fade al-delay-2" style={{}} />
        <path d="M16 18v-2" className="al-secondary al-anim-fade al-delay-3" style={{}} />
        <path d="M2 11h1.5" className="al-primary al-anim-fade al-delay-4" style={{}} />
        <path d="M20 18v-2" className="al-secondary al-anim-fade al-delay-5" style={{}} />
        <path d="M20.5 11H22" className="al-primary al-anim-fade al-delay-6" style={{}} />
        <path d="M4 18v-2" className="al-secondary al-anim-fade al-delay-7" style={{}} />
        <path d="M8 12v-2" className="al-primary al-anim-fade al-delay-7" style={{}} />
        <path d="M8 18v-2" className="al-secondary al-anim-fade al-delay-7" style={{}} />
        <rect x="2" y="6" width="20" height="10" rx="2" className="al-primary al-anim-fade al-delay-7" style={{}} />
      </svg>);
}
