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
      ><path d="M10.5 5H19a2 2 0 0 1 2 2v8.5" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M17 11h-.5" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m2 2 20 20" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M7 11h4" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M7 15h2.5" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
      </svg>);
}
