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
      ><path d="M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M5 3a2 2 0 0 0-2 2" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M19 3a2 2 0 0 1 2 2" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M5 21a2 2 0 0 1-2-2" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M9 3h1" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M9 21h2" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="M14 3h1" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
        <path d="M3 9v1" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <path d="M21 9v2" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <path d="M3 14v1" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
      </svg>);
}
