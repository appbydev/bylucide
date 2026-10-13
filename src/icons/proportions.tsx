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
      ><rect width="20" height="16" x="2" y="4" rx="2" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M12 9v11" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M2 9h13a2 2 0 0 1 2 2v9" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
      </svg>);
}
