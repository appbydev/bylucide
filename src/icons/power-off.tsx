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
      ><path d="M18.36 6.64A9 9 0 0 1 20.77 15" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M6.16 6.16a9 9 0 1 0 12.68 12.68" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M12 2v4" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m2 2 20 20" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
