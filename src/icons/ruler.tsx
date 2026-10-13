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
      ><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m14.5 12.5 2-2" className="al-secondary al-anim-fade al-delay-1" style={{}} />
        <path d="m11.5 9.5 2-2" className="al-secondary al-anim-fade al-delay-2" style={{}} />
        <path d="m8.5 6.5 2-2" className="al-secondary al-anim-fade al-delay-3" style={{}} />
        <path d="m17.5 15.5 2-2" className="al-secondary al-anim-fade al-delay-4" style={{}} />
      </svg>);
}
