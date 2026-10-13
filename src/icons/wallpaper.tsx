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
      ><path d="M12 17v4" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M8 21h8" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <circle cx="8" cy="9" r="2" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <rect x="2" y="3" width="20" height="14" rx="2" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
