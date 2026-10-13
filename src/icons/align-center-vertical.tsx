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
      ><path d="M12 2v20" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
