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
      ><path d="m2 10 2.456-3.684a.7.7 0 0 1 1.106-.013l2.39 3.413a.7.7 0 0 0 1.096-.001l2.402-3.432a.7.7 0 0 1 1.098 0l2.402 3.432a.7.7 0 0 0 1.098 0l2.389-3.413a.7.7 0 0 1 1.106.013L22 10" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m2 18.002 2.456-3.684a.7.7 0 0 1 1.106-.013l2.39 3.413a.7.7 0 0 0 1.097 0l2.402-3.432a.7.7 0 0 1 1.098 0l2.402 3.432a.7.7 0 0 0 1.098 0l2.389-3.413a.7.7 0 0 1 1.106.013L22 18.002" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
      </svg>);
}
