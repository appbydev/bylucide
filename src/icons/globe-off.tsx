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
      ><path d="M10.114 4.462A14.5 14.5 0 0 1 12 2a10 10 0 0 1 9.313 13.643" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M15.557 15.556A14.5 14.5 0 0 1 12 22 10 10 0 0 1 4.929 4.929" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M15.892 10.234A14.5 14.5 0 0 0 12 2a10 10 0 0 0-3.643.687" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M17.656 12H22" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M19.071 19.071A10 10 0 0 1 12 22 14.5 14.5 0 0 1 8.44 8.45" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M2 12h10" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="m2 2 20 20" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
      </svg>);
}
