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
      ><path d="M10 10v7.9" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M11.802 6.145a5 5 0 0 1 6.053 6.053" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M14 6.1v2.243" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m15.5 15.571-.964.964a5 5 0 0 1-7.071 0 5 5 0 0 1 0-7.07l.964-.965" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="m2 2 20 20" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
      </svg>);
}
