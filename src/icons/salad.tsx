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
      ><path d="M7 21h10" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m13 12 4-4" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
