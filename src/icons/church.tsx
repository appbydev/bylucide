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
      ><path d="M10 9h4" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M12 7v5" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M14 21v-3a2 2 0 0 0-4 0v3" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m18 9 3.52 2.147a1 1 0 0 1 .48.854V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6.999a1 1 0 0 1 .48-.854L6 9" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M6 21V7a1 1 0 0 1 .376-.782l5-3.999a1 1 0 0 1 1.249.001l5 4A1 1 0 0 1 18 7v14" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
