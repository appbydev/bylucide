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
      ><path d="M10 9H4L2 7l2-2h6" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M14 5h6l2 2-2 2h-6" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M10 22V4a2 2 0 1 1 4 0v18" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M8 22h8" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
