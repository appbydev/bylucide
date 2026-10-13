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
      ><path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M8 14v.5" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M16 14v.5" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
