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
      ><path d="M15 11h4.5a1 1 0 0 1 0 5h-4a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h3a1 1 0 0 1 0 5" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M3.304 13h6.392" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
      </svg>);
}
