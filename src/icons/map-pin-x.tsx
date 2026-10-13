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
      ><path d="M19.752 11.901A7.78 7.78 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 19 19 0 0 0 .09-.077" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <circle cx="12" cy="10" r="3" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m21.5 15.5-5 5" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m21.5 20.5-5-5" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
