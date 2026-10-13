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
      ><path d="M8 22h8" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M7 10h3m7 0h-1.343" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M12 15v7" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <line x1="2" x2="22" y1="2" y2="22" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
