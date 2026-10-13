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
      ><path d="M12 17v4" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M22 12.307V15a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8.693" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M8 21h8" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <circle cx="19" cy="6" r="3" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
