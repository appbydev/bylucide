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
      ><rect width="18" height="12" x="3" y="8" rx="1" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
      </svg>);
}
