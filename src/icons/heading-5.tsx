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
      ><path d="M4 12h8" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M4 18V6" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M12 18V6" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M17 13v-3h4" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
