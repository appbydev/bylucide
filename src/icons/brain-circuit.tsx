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
      ><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M9 13a4.5 4.5 0 0 0 3-4" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M3.477 10.896a4 4 0 0 1 .585-.396" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M6 18a4 4 0 0 1-1.967-.516" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M12 13h4" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="M12 18h6a2 2 0 0 1 2 2v1" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
        <path d="M12 8h8" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <path d="M16 8V5a2 2 0 0 1 2-2" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <circle cx="16" cy="13" r=".5" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <circle cx="18" cy="3" r=".5" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <circle cx="20" cy="21" r=".5" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <circle cx="20" cy="8" r=".5" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
      </svg>);
}
