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
      ><path d="M2 12 7 2" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m7 12 5-10" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m12 12 5-10" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m17 12 5-10" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M4.5 7h15" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M12 16v6" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
      </svg>);
}
