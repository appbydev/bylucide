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
      ><path d="M10 20h4" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M12 16v6" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M17 2h4v4" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m21 2-5.46 5.46" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <circle cx="12" cy="11" r="5" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
