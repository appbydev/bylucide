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
      ><path d="M12 6v.343" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M19 13.343V9A7 7 0 0 0 8.56 2.902" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M22 22 2 2" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
