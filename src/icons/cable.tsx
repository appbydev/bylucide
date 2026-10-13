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
      ><path d="M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M17 21v-2" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M21 21v-2" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M3 5V3" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="M7 5V3" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
      </svg>);
}
