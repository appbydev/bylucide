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
      ><path d="m12.99 6.74 1.93 3.44" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M19.136 12a10 10 0 0 1-14.271 0" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m21 21-2.16-3.84" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m3 21 8.02-14.26" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <circle cx="12" cy="5" r="2" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
