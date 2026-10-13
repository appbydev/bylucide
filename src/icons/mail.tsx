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
      ><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" className="al-primary al-anim-mail-flap al-delay-0" style={{}} />
        <rect x="2" y="4" width="20" height="16" rx="2" className="al-secondary al-anim-fill al-delay-1" style={{}} />
      </svg>);
}
