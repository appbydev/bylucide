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
      ><path d="M12 16v5" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M16 14v7" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M20 10v11" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M4 18v3" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M8 14v7" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
      </svg>);
}
