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
      ><path d="M15.295 19.562 16 22" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m17 16 3.758 2.098" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m19 12.5 3.026-.598" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M7.61 6.3a3 3 0 0 0-3.92 1.3l-1.38 2.79a3 3 0 0 0 1.3 3.91l6.89 3.597a1 1 0 0 0 1.342-.447l3.106-6.211a1 1 0 0 0-.447-1.341z" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M8 9V2" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
