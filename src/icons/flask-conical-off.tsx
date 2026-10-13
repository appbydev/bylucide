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
      ><path d="M10 2v2.343" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M14 2v6.343" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m2 2 20 20" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-1.755-2.96l5.227-9.563" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M6.453 15H15" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M8.5 2h7" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
      </svg>);
}
