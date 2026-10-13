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
      ><path d="M2 10s3-3 3-8" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M22 10s-3-3-3-8" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M10 2c0 4.4-3.6 8-8 8" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M14 2c0 4.4 3.6 8 8 8" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M2 10s2 2 2 5" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M22 10s-2 2-2 5" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="M8 15h8" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
        <path d="M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <path d="M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
      </svg>);
}
