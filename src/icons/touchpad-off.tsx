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
      ><path d="M12 20v-6" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M19.656 14H22" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M2 14h12" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m2 2 20 20" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M9.656 4H20a2 2 0 0 1 2 2v10.344" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
      </svg>);
}
