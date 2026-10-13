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
      ><path d="M11 15h2" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M12 12v3" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M12 19v3" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M15.282 19a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M9 9a3 3 0 1 1 6 0" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
