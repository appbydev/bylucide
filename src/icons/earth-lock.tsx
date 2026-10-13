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
      ><path d="M7 3.34V5a3 3 0 0 0 3 3" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M12 2a10 10 0 1 0 9.54 13" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M20 6V4a2 2 0 1 0-4 0v2" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <rect width="8" height="5" x="14" y="6" rx="1" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
      </svg>);
}
