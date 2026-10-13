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
      ><rect width="16" height="20" x="4" y="2" rx="2" className="al-primary al-anim-fill al-delay-0" style={{}} />
        <line x1="8" x2="16" y1="6" y2="6" className="al-secondary al-anim-fade al-delay-1" style={{}} />
        <line x1="16" x2="16" y1="14" y2="18" className="al-secondary al-anim-fade al-delay-2" style={{}} />
        <path d="M16 10h.01" className="al-secondary al-anim-fade al-delay-3" style={{}} />
        <path d="M12 10h.01" className="al-secondary al-anim-fade al-delay-4" style={{}} />
        <path d="M8 10h.01" className="al-secondary al-anim-fade al-delay-5" style={{}} />
        <path d="M12 14h.01" className="al-secondary al-anim-fade al-delay-6" style={{}} />
        <path d="M8 14h.01" className="al-secondary al-anim-fade al-delay-7" style={{}} />
        <path d="M12 18h.01" className="al-secondary al-anim-fade al-delay-7" style={{}} />
        <path d="M8 18h.01" className="al-secondary al-anim-fade al-delay-7" style={{}} />
      </svg>);
}
