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
      ><line x1="2" x2="5" y1="12" y2="12" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <line x1="19" x2="22" y1="12" y2="12" className="al-secondary al-anim-fade al-delay-1" style={{}} />
        <line x1="12" x2="12" y1="2" y2="5" className="al-secondary al-anim-fade al-delay-2" style={{}} />
        <line x1="12" x2="12" y1="19" y2="22" className="al-secondary al-anim-fade al-delay-3" style={{}} />
        <circle cx="12" cy="12" r="7" className="al-secondary al-anim-fade al-delay-4" style={{}} />
      </svg>);
}
