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
      ><path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m8 6 2-2" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m18 16 2-2" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="m15 5 4 4" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
      </svg>);
}
