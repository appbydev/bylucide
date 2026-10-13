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
      ><circle cx="7" cy="7" r="5" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <circle cx="17" cy="17" r="5" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M12 17h10" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m3.46 10.54 7.08-7.08" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
