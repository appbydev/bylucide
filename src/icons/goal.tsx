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
      ><path d="M12 13V2l8 4-8 4" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M20.561 10.222a9 9 0 1 1-12.55-5.29" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M8.002 9.997a5 5 0 1 0 8.9 2.02" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
      </svg>);
}
