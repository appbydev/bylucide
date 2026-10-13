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
      ><path d="M11 22H5.5a1 1 0 0 1 0-5h4.501" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m21 22-1.879-1.878" className="al-secondary al-anim-fill al-delay-1" style={{}} />
        <path d="M3 19.5v-15A2.5 2.5 0 0 1 5.5 2H18a1 1 0 0 1 1 1v8" className="al-secondary al-anim-fill al-delay-2" style={{}} />
        <circle cx="17" cy="18" r="3" className="al-secondary al-anim-fill al-delay-3" style={{}} />
      </svg>);
}
