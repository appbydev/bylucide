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
      ><path d="M10 18v-7" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M14 18v-7" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M18 18v-7" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M3 22h18" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M6 18v-7" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
      </svg>);
}
