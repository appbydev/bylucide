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
      ><path d="M16 3v2.107" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M17 9c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 22 17a5 5 0 0 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C13 11.5 16 9 17 9" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M21 8.274V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.938" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M3 15h5.253" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M3 9h8.228" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M8 15v6" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="M8 3v6" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
      </svg>);
}
