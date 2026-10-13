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
      ><path d="M12 6v16" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m19 13 2-1a9 9 0 0 1-18 0l2 1" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M9 11h6" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <circle cx="12" cy="4" r="2" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
