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
      ><path d="M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M18 6V3a1 1 0 0 0-1-1h-3" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <rect width="8" height="12" x="8" y="10" rx="1" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
      </svg>);
}
