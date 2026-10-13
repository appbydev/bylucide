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
      ><rect width="18" height="18" x="3" y="3" rx="2" className="al-primary al-anim-menu-line al-delay-0" style={{ '--al-scale-x': '1' }} />
        <path d="M7 8h10" className="al-secondary al-anim-menu-line al-delay-1" style={{ '--al-scale-x': '0.85' }} />
        <path d="M7 12h10" className="al-primary al-anim-menu-line al-delay-2" style={{ '--al-scale-x': '0.7' }} />
        <path d="M7 16h10" className="al-secondary al-anim-menu-line al-delay-3" style={{ '--al-scale-x': '0.55' }} />
      </svg>);
}
