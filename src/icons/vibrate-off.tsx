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
      ><path d="m2 8 2 2-2 2 2 2-2 2" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m22 8-2 2 2 2-2 2 2 2" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M16 10.34V6c0-.55-.45-1-1-1h-4.34" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <line x1="2" x2="22" y1="2" y2="22" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
