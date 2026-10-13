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
      ><path d="M12 22V12" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M20.27 18.27 22 20" className="al-secondary al-anim-fill al-delay-1" style={{}} />
        <path d="M21 10.498V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l.98-.559" className="al-secondary al-anim-fill al-delay-2" style={{}} />
        <path d="M3.29 7 12 12l8.71-5" className="al-secondary al-anim-fill al-delay-3" style={{}} />
        <path d="m7.5 4.27 8.997 5.148" className="al-secondary al-anim-fill al-delay-4" style={{}} />
        <circle cx="18.5" cy="16.5" r="2.5" className="al-secondary al-anim-fill al-delay-5" style={{}} />
      </svg>);
}
