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
      ><path d="M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M12 20v2" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M12 14v2" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M12 8v2" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M12 2v2" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
      </svg>);
}
