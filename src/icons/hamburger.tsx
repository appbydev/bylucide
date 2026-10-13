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
      ><path d="M12 16H4a2 2 0 1 1 0-4h16a2 2 0 1 1 0 4h-4.25" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M5 12a2 2 0 0 1-2-2 9 7 0 0 1 18 0 2 2 0 0 1-2 2" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M5 16a2 2 0 0 0-2 2 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 2 2 0 0 0-2-2q0 0 0 0" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m6.67 12 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
