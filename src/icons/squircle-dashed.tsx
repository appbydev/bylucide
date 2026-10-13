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
      ><path d="M13.77 3.043a34 34 0 0 0-3.54 0" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M13.771 20.956a33 33 0 0 1-3.541.001" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M20.18 17.74c-.51 1.15-1.29 1.93-2.439 2.44" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M20.18 6.259c-.51-1.148-1.291-1.929-2.44-2.438" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M20.957 10.23a33 33 0 0 1 0 3.54" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M3.043 10.23a34 34 0 0 0 .001 3.541" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="M6.26 20.179c-1.15-.508-1.93-1.29-2.44-2.438" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
        <path d="M6.26 3.82c-1.149.51-1.93 1.291-2.44 2.44" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
      </svg>);
}
