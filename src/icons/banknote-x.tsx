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
      ><path d="M13 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m17 17 5 5" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M18 12h.01" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m22 17-5 5" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M6 12h.01" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <circle cx="12" cy="12" r="2" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
      </svg>);
}
