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
      ><path d="M15 4V2" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M15 16v-2" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M8 9h2" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M20 9h2" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M17.8 11.8 19 13" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M15 9h.01" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="M17.8 6.2 19 5" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
        <path d="m3 21 9-9" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <path d="M12.2 6.2 11 5" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
      </svg>);
}
