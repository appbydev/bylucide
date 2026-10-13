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
      ><path d="M12.531 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6.377" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m16.5 16.5 5 5" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="m16.5 21.5 5-5" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.5" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
