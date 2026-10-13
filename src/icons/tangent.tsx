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
      ><circle cx="17" cy="4" r="2" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M15.59 5.41 5.41 15.59" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <circle cx="4" cy="17" r="2" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M12 22s-4-9-1.5-11.5S22 12 22 12" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
