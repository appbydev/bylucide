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
      ><path d="M4 20a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m12.474 5.943 1.567 5.34a1 1 0 0 0 1.75.328l2.616-3.402" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m20 9-3 9" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m5.594 8.209 2.615 3.403a1 1 0 0 0 1.75-.329l1.567-5.34" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M7 18 4 9" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <circle cx="12" cy="4" r="2" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <circle cx="20" cy="7" r="2" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
        <circle cx="4" cy="7" r="2" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
      </svg>);
}
