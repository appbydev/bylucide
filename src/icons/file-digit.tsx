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
      ><path d="M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M14 2v5a1 1 0 0 0 1 1h5" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M10 16h2v6" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M10 22h4" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <rect x="2" y="16" width="4" height="6" rx="2" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
