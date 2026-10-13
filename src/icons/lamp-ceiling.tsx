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
      ><path d="M12 2v5" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M14.829 15.998a3 3 0 1 1-5.658 0" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M20.92 14.606A1 1 0 0 1 20 16H4a1 1 0 0 1-.92-1.394l3-7A1 1 0 0 1 7 7h10a1 1 0 0 1 .92.606z" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
      </svg>);
}
