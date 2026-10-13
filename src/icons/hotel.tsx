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
      ><path d="M10 22v-6.57" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M12 11h.01" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M12 7h.01" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M14 15.43V22" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M15 16a5 5 0 0 0-6 0" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M16 11h.01" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="M16 7h.01" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
        <path d="M8 11h.01" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <path d="M8 7h.01" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <rect x="4" y="2" width="16" height="20" rx="2" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
      </svg>);
}
