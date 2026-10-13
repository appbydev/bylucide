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
      ><rect width="5" height="5" x="3" y="3" rx="1" className="al-primary al-anim-fill al-delay-0" style={{}} />
        <rect width="5" height="5" x="16" y="3" rx="1" className="al-secondary al-anim-fade al-delay-1" style={{}} />
        <rect width="5" height="5" x="3" y="16" rx="1" className="al-secondary al-anim-fade al-delay-2" style={{}} />
        <path d="M21 16h-3a2 2 0 0 0-2 2v3" className="al-secondary al-anim-fade al-delay-3" style={{}} />
        <path d="M21 21v.01" className="al-secondary al-anim-fade al-delay-4" style={{}} />
        <path d="M12 7v3a2 2 0 0 1-2 2H7" className="al-secondary al-anim-fade al-delay-5" style={{}} />
        <path d="M3 12h.01" className="al-secondary al-anim-fade al-delay-6" style={{}} />
        <path d="M12 3h.01" className="al-secondary al-anim-fade al-delay-7" style={{}} />
        <path d="M12 16v.01" className="al-secondary al-anim-fade al-delay-7" style={{}} />
        <path d="M16 12h1" className="al-secondary al-anim-fade al-delay-7" style={{}} />
        <path d="M21 12v.01" className="al-secondary al-anim-fade al-delay-7" style={{}} />
        <path d="M12 21v-1" className="al-secondary al-anim-fade al-delay-7" style={{}} />
      </svg>);
}
