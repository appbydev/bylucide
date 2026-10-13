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
      ><rect width="18" height="18" x="3" y="3" rx="2" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <circle cx="8.5" cy="8.5" r="1.5" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <line x1="9.56066" y1="9.56066" x2="12" y2="12" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <line x1="17" y1="17" x2="14.82" y2="14.82" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <circle cx="8.5" cy="15.5" r="1.5" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <line x1="9.56066" y1="14.43934" x2="17" y2="7" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
      </svg>);
}
