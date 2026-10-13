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
      ><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" className="al-primary al-anim-fill al-delay-0" style={{}} />
        <path d="M8.5 8.5v.01" className="al-secondary al-anim-fade al-delay-1" style={{}} />
        <path d="M16 15.5v.01" className="al-secondary al-anim-fade al-delay-2" style={{}} />
        <path d="M12 12v.01" className="al-secondary al-anim-fade al-delay-3" style={{}} />
        <path d="M11 17v.01" className="al-secondary al-anim-fade al-delay-4" style={{}} />
        <path d="M7 14v.01" className="al-secondary al-anim-fade al-delay-5" style={{}} />
      </svg>);
}
