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
      ><path d="M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M8 13v9" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M16 22v-9" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="m9 6 1 7" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="m15 6-1 7" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M12 6V2" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="M13 2h-2" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
      </svg>);
}
