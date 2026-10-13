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
      ><path d="M14 17H5" className="al-primary al-anim-gear al-delay-0" style={{ '--al-rotation': '90deg' }} />
        <path d="M19 7h-9" className="al-secondary al-anim-gear al-delay-1" style={{ '--al-rotation': '90deg' }} />
        <circle cx="17" cy="17" r="3" className="al-secondary al-anim-gear al-delay-2" style={{ '--al-rotation': '90deg' }} />
        <circle cx="7" cy="7" r="3" className="al-secondary al-anim-gear al-delay-3" style={{ '--al-rotation': '90deg' }} />
      </svg>);
}
