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
      ><path d="m15 11-1 9" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m19 11-4-7" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M2 11h20" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M4.5 15.5h15" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="m5 11 4-7" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="m9 11 1 9" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
      </svg>);
}
