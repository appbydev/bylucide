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
      ><path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m2.5 21.5 1.4-1.4" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m20.1 3.9 1.4-1.4" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="m9.6 14.4 4.8-4.8" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
