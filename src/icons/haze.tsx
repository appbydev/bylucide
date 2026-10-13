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
      ><path d="m5.2 6.2 1.4 1.4" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M2 13h2" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M20 13h2" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m17.4 7.6 1.4-1.4" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M22 17H2" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M22 21H2" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="M16 13a4 4 0 0 0-8 0" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
        <path d="M12 5V2.5" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
      </svg>);
}
