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
      ><circle cx="12" cy="12" r="2" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M12 2v4" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m6.8 15-3.5 2" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m20.7 7-3.5 2" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M6.8 9 3.3 7" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="m20.7 17-3.5-2" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="m9 22 3-8 3 8" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
        <path d="M8 22h8" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <path d="M18 18.7a9 9 0 1 0-12 0" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
      </svg>);
}
