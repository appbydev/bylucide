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
      ><path d="M10 10 7 7" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m10 14-3 3" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m14 10 3-3" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m14 14 3 3" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M14.205 4.139a4 4 0 1 1 5.439 5.863" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M19.637 14a4 4 0 1 1-5.432 5.868" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="M4.367 10a4 4 0 1 1 5.438-5.862" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
        <path d="M9.795 19.862a4 4 0 1 1-5.429-5.873" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <rect x="10" y="8" width="4" height="8" rx="1" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
      </svg>);
}
