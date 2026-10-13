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
      ><path d="M12 12V9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M16 20v-3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M20 22V2" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M4 12h16" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M4 20h16" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M4 2v20" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="M4 4h16" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
      </svg>);
}
