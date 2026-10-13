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
      ><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M12 17h.01" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
      </svg>);
}
