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
      ><path d="M12 19v3" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M12 2v3" className="al-secondary al-anim-fade al-delay-1" style={{}} />
        <path d="M18.89 13.24a7 7 0 0 0-8.13-8.13" className="al-secondary al-anim-fade al-delay-2" style={{}} />
        <path d="M19 12h3" className="al-secondary al-anim-fade al-delay-3" style={{}} />
        <path d="M2 12h3" className="al-secondary al-anim-fade al-delay-4" style={{}} />
        <path d="m2 2 20 20" className="al-secondary al-anim-fade al-delay-5" style={{}} />
        <path d="M7.05 7.05a7 7 0 0 0 9.9 9.9" className="al-secondary al-anim-fade al-delay-6" style={{}} />
      </svg>);
}
