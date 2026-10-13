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
      ><path d="m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M16 18h-5" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M18 5a1 1 0 0 0-1 1v5.573" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M3 4h8.129a1 1 0 0 1 .99.863L13 11.246" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M4 11V4" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M7 15h.01" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="M8 10.1V4" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
        <circle cx="18" cy="18" r="2" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <circle cx="7" cy="15" r="5" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
      </svg>);
}
