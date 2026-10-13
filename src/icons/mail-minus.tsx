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
      ><path d="M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" className="al-primary al-anim-mail-flap al-delay-0" style={{}} />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" className="al-secondary al-anim-fill al-delay-1" style={{}} />
        <path d="M16 19h6" className="al-secondary al-anim-fill al-delay-2" style={{}} />
      </svg>);
}
