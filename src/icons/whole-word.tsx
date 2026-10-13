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
      ><circle cx="7" cy="12" r="3" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M10 9v6" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <circle cx="17" cy="12" r="3" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M14 7v8" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
