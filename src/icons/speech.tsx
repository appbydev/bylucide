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
      ><path d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M19.8 17.8a7.5 7.5 0 0 0 .003-10.603" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M17 15a3.5 3.5 0 0 0-.025-4.975" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
      </svg>);
}
