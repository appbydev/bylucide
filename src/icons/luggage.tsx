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
      ><path d="M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M10 20h4" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <circle cx="16" cy="20" r="2" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <circle cx="8" cy="20" r="2" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
