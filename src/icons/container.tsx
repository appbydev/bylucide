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
      ><path d="M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M10 21.9V14L2.1 9.1" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m10 14 11.9-6.9" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M14 19.8v-8.1" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M18 17.5V9.4" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
