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
      ><path d="M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m8.5 16.5-1-1" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
