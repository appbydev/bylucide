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
      ><path d="M12.35 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .71-1.53l7-6a2 2 0 0 1 2.58 0l7 6A2 2 0 0 1 21 10v2.35" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M14.8 12.4A1 1 0 0 0 14 12h-4a1 1 0 0 0-1 1v8" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M15 18h6" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M18 15v6" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
