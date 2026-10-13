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
      ><path d="M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M12 17v4" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M8 21h8" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <rect x="2" y="3" width="20" height="14" rx="2" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
