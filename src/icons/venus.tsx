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
      ><path d="M12 15v7" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M9 19h6" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <circle cx="12" cy="9" r="6" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
      </svg>);
}
