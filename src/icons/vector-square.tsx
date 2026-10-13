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
      ><path d="M19.5 7a24 24 0 0 1 0 10" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M4.5 7a24 24 0 0 0 0 10" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M7 19.5a24 24 0 0 0 10 0" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M7 4.5a24 24 0 0 1 10 0" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <rect x="17" y="17" width="5" height="5" rx="1" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <rect x="17" y="2" width="5" height="5" rx="1" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <rect x="2" y="17" width="5" height="5" rx="1" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
        <rect x="2" y="2" width="5" height="5" rx="1" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
      </svg>);
}
