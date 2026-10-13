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
      ><path d="M12.656 7H13a3 3 0 0 1 2.984 3.307" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M13 13H9" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M19.071 19.071A1 1 0 0 1 4.93 4.93" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m2 2 20 20" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M8.357 2.687a10 10 0 0 1 12.956 12.956" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M9 17V9" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
      </svg>);
}
