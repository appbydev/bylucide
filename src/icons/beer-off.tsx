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
      ><path d="M13 13v5" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M17 11.47V8" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M17 11h1a3 3 0 0 1 2.745 4.211" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m2 2 20 20" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="M8.727 3.204C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.149 3.149 0 0 0-.842.12" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
        <path d="M9 14.6V18" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
      </svg>);
}
