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
      ><path d="M12 6v6l2 1" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M12.337 21.994a10 10 0 1 1 9.588-8.767" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m14 18 4 4 4-4" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M18 14v8" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
