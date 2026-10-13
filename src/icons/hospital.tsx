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
      ><path d="M12 7v4" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M14 21v-3a2 2 0 0 0-4 0v3" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M14 9h-4" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
