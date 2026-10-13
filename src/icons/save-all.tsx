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
      ><path d="M10 2v3a1 1 0 0 0 1 1h5" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M18 22H4a2 2 0 0 1-2-2V6" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
