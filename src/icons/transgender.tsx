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
      ><path d="M12 16v6" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M14 20h-4" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M18 2h4v4" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m2 2 7.17 7.17" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M2 5.355V2h3.357" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="m22 2-7.17 7.17" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="M8 5 5 8" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
        <circle cx="12" cy="12" r="4" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
      </svg>);
}
