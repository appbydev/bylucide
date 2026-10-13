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
      ><path d="M14 19V7a2 2 0 0 0-2-2H9" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M15 19H9" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M19 19h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62L18.3 9.38a1 1 0 0 0-.78-.38H14" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M2 13v5a1 1 0 0 0 1 1h2" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M4 3 2.15 5.15a.495.495 0 0 0 .35.86h2.15a.47.47 0 0 1 .35.86L3 9.02" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <circle cx="17" cy="19" r="2" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <circle cx="7" cy="19" r="2" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
      </svg>);
}
