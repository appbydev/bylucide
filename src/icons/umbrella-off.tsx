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
      ><path d="M12 13v7a2 2 0 0 0 4 0" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M12 2v2" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M18.656 13h2.336a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-12.07-7.51" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m2 2 20 20" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M5.961 5.957a10.28 10.28 0 0 0-3.922 5.769A1 1 0 0 0 3 13h10" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
      </svg>);
}
