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
      ><path d="M21 5H3" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M10 12H3" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M10 19H3" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M15 12.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
