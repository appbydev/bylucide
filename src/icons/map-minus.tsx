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
      ><path d="m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V14" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M15 5.764V14" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M21 18h-6" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M9 3.236v15" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
