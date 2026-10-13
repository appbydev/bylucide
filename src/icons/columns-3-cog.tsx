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
      ><path d="M10.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m14.3 19.6 1-.4" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M15 3v7.5" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m15.2 16.9-.9-.3" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="m16.6 21.7.3-.9" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="m16.8 15.3-.4-1" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="m19.1 15.2.3-.9" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
        <path d="m19.6 21.7-.4-1" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <path d="m20.7 16.8 1-.4" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <path d="m21.7 19.4-.9-.3" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <path d="M9 3v18" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <circle cx="18" cy="18" r="3" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
      </svg>);
}
