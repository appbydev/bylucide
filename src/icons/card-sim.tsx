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
      ><path d="M12 14v4" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M14.172 2a2 2 0 0 1 1.414.586l3.828 3.828A2 2 0 0 1 20 7.828V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M8 14h8" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <rect x="8" y="10" width="8" height="8" rx="1" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
