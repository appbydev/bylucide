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
      ><circle cx="4" cy="4" r="2" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m14 5 3-3 3 3" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m14 10 3-3 3 3" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M17 14V2" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M17 14H7l-5 8h20Z" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M8 14v8" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="m9 14 5 8" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
      </svg>);
}
