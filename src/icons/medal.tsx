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
      ><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M11 12 5.12 2.2" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m13 12 5.88-9.8" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M8 7h8" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <circle cx="12" cy="17" r="5" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M12 18v-2h-.5" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
      </svg>);
}
