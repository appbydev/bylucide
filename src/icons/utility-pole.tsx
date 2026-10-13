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
      ><path d="M12 2v20" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M2 5h20" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M3 3v2" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M7 3v2" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M17 3v2" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M21 3v2" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="m19 5-7 7-7-7" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
      </svg>);
}
