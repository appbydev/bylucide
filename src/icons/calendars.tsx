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
      ><path d="M12 2v2" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M15.726 21.01A2 2 0 0 1 14 22H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M18 2v2" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M2 13h2" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M8 8h14" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <rect x="8" y="3" width="14" height="14" rx="2" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
      </svg>);
}
