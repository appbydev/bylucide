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
      ><path d="M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M8 8v1" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M12 8v1" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M16 8v1" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <rect width="20" height="12" x="2" y="9" rx="2" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <circle cx="8" cy="15" r="2" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <circle cx="16" cy="15" r="2" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
      </svg>);
}
