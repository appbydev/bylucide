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
      ><path d="M4 12h8" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M4 18V6" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M12 18V6" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <circle cx="19" cy="16" r="2" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M20 10c-2 2-3 3.5-3 6" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
