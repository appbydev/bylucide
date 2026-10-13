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
      ><circle cx="18" cy="5" r="3" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <circle cx="6" cy="12" r="3" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <circle cx="18" cy="19" r="3" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
