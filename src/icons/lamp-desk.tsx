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
      ><path d="M10.293 2.293a1 1 0 0 1 1.414 0l2.5 2.5 5.994 1.227a1 1 0 0 1 .506 1.687l-7 7a1 1 0 0 1-1.687-.506l-1.227-5.994-2.5-2.5a1 1 0 0 1 0-1.414z" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m14.207 4.793-3.414 3.414" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M3 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m9.086 6.5-4.793 4.793a1 1 0 0 0-.18 1.17L7 18" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
