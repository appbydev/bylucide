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
      ><path d="m8 6 4-4 4 4" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m20 22-5-5" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
      </svg>);
}
