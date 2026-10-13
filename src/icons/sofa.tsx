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
      ><path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M4 18v2" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M20 18v2" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M12 4v9" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
