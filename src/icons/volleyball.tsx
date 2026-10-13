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
      ><path d="M11.1 7.1a16.55 16.55 0 0 1 10.9 4" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M12 12a12.6 12.6 0 0 1-8.7 5" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M16.8 13.6a16.55 16.55 0 0 1-9 7.5" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <circle cx="12" cy="12" r="10" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
      </svg>);
}
