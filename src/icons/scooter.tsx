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
      ><path d="M21 4h-3.5l2 11.05" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M6.95 17h5.142c.523 0 .95-.406 1.063-.916a6.5 6.5 0 0 1 5.345-5.009" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <circle cx="19.5" cy="17.5" r="2.5" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <circle cx="4.5" cy="17.5" r="2.5" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
