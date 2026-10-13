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
      ><path d="M12 6v6l3.644 1.822" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M16 19h6" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M19 16v6" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M21.92 13.267a10 10 0 1 0-8.653 8.653" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
