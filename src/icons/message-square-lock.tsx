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
      ><path d="M22 8.5V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H10" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M20 15v-2a2 2 0 0 0-4 0v2" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <rect x="14" y="15" width="8" height="5" rx="1" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
      </svg>);
}
