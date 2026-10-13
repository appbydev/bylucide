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
      ><path d="M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M6 8h4" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M6 18h4" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M14 8h4" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M14 18h4" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
      </svg>);
}
