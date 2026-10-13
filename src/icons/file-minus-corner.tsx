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
      ><path d="M20 14V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M14 2v5a1 1 0 0 0 1 1h5" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M14 18h6" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
      </svg>);
}
