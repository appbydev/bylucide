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
      ><path d="M18 17a1 1 0 0 0-1 1v1a2 2 0 1 0 2-2z" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M20.97 3.61a.45.45 0 0 0-.58-.58C10.2 6.6 6.6 10.2 3.03 20.39a.45.45 0 0 0 .58.58C13.8 17.4 17.4 13.8 20.97 3.61" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m6.707 6.707 10.586 10.586" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M7 5a2 2 0 1 0-2 2h1a1 1 0 0 0 1-1z" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
