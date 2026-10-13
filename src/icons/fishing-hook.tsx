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
      ><path d="m17.586 11.414-5.93 5.93a1 1 0 0 1-8-8l3.137-3.137a.707.707 0 0 1 1.207.5V10" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M20.414 8.586 22 7" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <circle cx="19" cy="10" r="2" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
      </svg>);
}
