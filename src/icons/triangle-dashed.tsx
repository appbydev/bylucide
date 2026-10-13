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
      ><path d="M10.17 4.193a2 2 0 0 1 3.666.013" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M14 21h2" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m15.874 7.743 1 1.732" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m18.849 12.952 1 1.732" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M21.824 18.18a2 2 0 0 1-1.835 2.824" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M4.024 21a2 2 0 0 1-1.839-2.839" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="m5.136 12.952-1 1.732" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
        <path d="M8 21h2" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <path d="m8.102 7.743-1 1.732" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
      </svg>);
}
