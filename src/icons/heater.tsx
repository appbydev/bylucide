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
      ><path d="M11 8c2-3-2-3 0-6" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M15.5 8c2-3-2-3 0-6" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M6 10h.01" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M6 14h.01" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M10 16v-4" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M14 16v-4" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="M18 16v-4" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
        <path d="M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <path d="M5 20v2" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <path d="M19 20v2" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
      </svg>);
}
