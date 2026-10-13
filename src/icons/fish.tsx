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
      ><path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M18 12v.5" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M16 17.93a9.77 9.77 0 0 1 0-11.86" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
      </svg>);
}
