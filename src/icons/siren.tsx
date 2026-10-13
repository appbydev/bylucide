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
      ><path d="M7 18v-6a5 5 0 1 1 10 0v6" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M21 12h1" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M18.5 4.5 18 5" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M2 12h1" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M12 2v1" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="m4.929 4.929.707.707" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
        <path d="M12 12v6" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
      </svg>);
}
