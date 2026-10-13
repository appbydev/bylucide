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
      ><path d="M12 7v4" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M7.998 9.003a5 5 0 1 0 8-.005" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <rect x="3" y="3" width="18" height="18" rx="2" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
      </svg>);
}
