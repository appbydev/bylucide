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
      ><path d="M22 5V2l-5.89 5.89" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <circle cx="16.6" cy="15.89" r="3" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <circle cx="8.11" cy="7.4" r="3" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <circle cx="12.35" cy="11.65" r="3" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <circle cx="13.91" cy="5.85" r="3" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <circle cx="18.15" cy="10.09" r="3" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <circle cx="6.56" cy="13.2" r="3" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
        <circle cx="10.8" cy="17.44" r="3" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <circle cx="5" cy="19" r="3" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
      </svg>);
}
