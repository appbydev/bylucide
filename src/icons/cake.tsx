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
      ><path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M2 21h20" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M7 8v3" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M12 8v3" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M17 8v3" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="M7 4h.01" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
        <path d="M12 4h.01" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <path d="M17 4h.01" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
      </svg>);
}
