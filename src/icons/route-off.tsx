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
      ><circle cx="6" cy="19" r="3" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M9 19h8.5c.4 0 .9-.1 1.3-.2" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m2 2 20 20" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M21 15.3a3.5 3.5 0 0 0-3.3-3.3" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M15 5h-4.3" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <circle cx="18" cy="5" r="3" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
      </svg>);
}
