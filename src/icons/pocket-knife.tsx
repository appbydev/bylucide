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
      ><path d="M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M18 6h.01" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M6 18h.01" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M18 11.66V22a4 4 0 0 0 4-4V6" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
