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
      ><path d="M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1z" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M13 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M18 6h4" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="m5 10-2 8" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="m7 18 2-8" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
      </svg>);
}
