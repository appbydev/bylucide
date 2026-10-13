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
      ><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M18 9h1.5a1 1 0 0 0 0-5H18" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M4 22h16" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M6 9H4.5a1 1 0 0 1 0-5H6" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
      </svg>);
}
