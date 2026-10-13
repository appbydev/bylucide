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
      ><path d="M12 3V2" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m15.4 17.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M2 14h12a2 2 0 0 1 0 4h-2" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M4 10h16" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M5 10a7 7 0 0 1 14 0" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M5 14v6a1 1 0 0 1-1 1H2" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
      </svg>);
}
