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
      ><path d="M8 22h8" className="al-primary al-anim-fill al-delay-0" style={{}} />
        <path d="M7 10h10" className="al-secondary al-anim-fade al-delay-1" style={{}} />
        <path d="M12 15v7" className="al-secondary al-anim-fade al-delay-2" style={{}} />
        <path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" className="al-secondary al-anim-fade al-delay-3" style={{}} />
      </svg>);
}
