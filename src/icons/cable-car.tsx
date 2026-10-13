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
      ><path d="M10 3h.01" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M14 2h.01" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m2 9 20-5" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M12 12V6.5" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <rect width="16" height="10" x="4" y="12" rx="3" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M9 12v5" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="M15 12v5" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
        <path d="M4 17h16" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
      </svg>);
}
