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
      ><circle cx="5" cy="6" r="3" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M5 9v12" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <circle cx="19" cy="18" r="3" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m15 9-3-3 3-3" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M12 6h5a2 2 0 0 1 2 2v7" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
