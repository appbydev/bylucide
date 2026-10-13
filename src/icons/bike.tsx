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
      ><circle cx="18.5" cy="17.5" r="3.5" className="al-primary al-anim-fill al-delay-0" style={{}} />
        <circle cx="5.5" cy="17.5" r="3.5" className="al-secondary al-anim-fade al-delay-1" style={{}} />
        <circle cx="15" cy="5" r="1" className="al-secondary al-anim-fade al-delay-2" style={{}} />
        <path d="M12 17.5V14l-3-3 4-3 2 3h2" className="al-secondary al-anim-fade al-delay-3" style={{}} />
      </svg>);
}
