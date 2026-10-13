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
      ><path d="M11.25 17.25h1.5L12 18z" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m15 12 2 2" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M18 6.5a.5.5 0 0 0-.5-.5" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M20.69 9.67a4.5 4.5 0 1 0-7.04-5.5 8.35 8.35 0 0 0-3.3 0 4.5 4.5 0 1 0-7.04 5.5C2.49 11.2 2 12.88 2 14.5 2 19.47 6.48 22 12 22s10-2.53 10-7.5c0-1.62-.48-3.3-1.3-4.83" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M6 6.5a.495.495 0 0 1 .5-.5" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="m9 12-2 2" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
      </svg>);
}
