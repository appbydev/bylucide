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
      ><path d="M 20 4 A2 2 0 0 1 22 6" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M 22 6 L 22 16.41" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M 7 16 L 16 16" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M 9.69 4 L 20 4" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M14 8h.01" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M18 8h.01" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="m2 2 20 20" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
        <path d="M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <path d="M6 8h.01" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <path d="M8 12h.01" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
      </svg>);
}
