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
      ><path d="M6 18h8" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M3 22h18" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M14 22a7 7 0 1 0 0-14h-1" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M9 14h2" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
      </svg>);
}
