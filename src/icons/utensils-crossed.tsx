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
      ><path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m2.1 21.8 6.4-6.3" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m19 5-7 7" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
