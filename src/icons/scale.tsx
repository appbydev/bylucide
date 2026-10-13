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
      ><path d="M12 3v18" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m19 8 3 8a5 5 0 0 1-6 0zV7" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m5 8 3 8a5 5 0 0 1-6 0zV7" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M7 21h10" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
