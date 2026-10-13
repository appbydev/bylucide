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
      ><path d="M16.05 10.966a5 2.5 0 0 1-8.1 0" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m16.923 14.049 4.48 2.04a1 1 0 0 1 .001 1.831l-8.574 3.9a2 2 0 0 1-1.66 0l-8.574-3.91a1 1 0 0 1 0-1.83l4.484-2.04" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M16.949 14.14a5 2.5 0 1 1-9.9 0L10.063 3.5a2 2 0 0 1 3.874 0z" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M9.194 6.57a5 2.5 0 0 0 5.61 0" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
