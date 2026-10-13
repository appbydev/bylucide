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
      ><path d="M13 6v5a1 1 0 0 0 1 1h6.102a1 1 0 0 1 .712.298l.898.91a1 1 0 0 1 .288.702V17a1 1 0 0 1-1 1h-3" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M5 18H3a1 1 0 0 1-1-1V8a2 2 0 0 1 2-2h12c1.1 0 2.1.8 2.4 1.8l1.176 4.2" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M9 18h5" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <circle cx="16" cy="18" r="2" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <circle cx="7" cy="18" r="2" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
