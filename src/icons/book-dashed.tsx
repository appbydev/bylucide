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
      ><path d="M12 17h1.5" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M12 22h1.5" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M12 2h1.5" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M17.5 22H19a1 1 0 0 0 1-1" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M17.5 2H19a1 1 0 0 1 1 1v1.5" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M20 14v3h-2.5" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="M20 8.5V10" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
        <path d="M4 10V8.5" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <path d="M4 19.5V14" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H8" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <path d="M8 22H6.5a1 1 0 0 1 0-5H8" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
      </svg>);
}
