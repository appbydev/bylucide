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
      ><path d="M12 2a10 10 0 0 1 7.38 16.75" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="m16 12-4-4-4 4" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M12 16V8" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M2.5 8.875a10 10 0 0 0-.5 3" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M2.83 16a10 10 0 0 0 2.43 3.4" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M4.636 5.235a10 10 0 0 1 .891-.857" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="M8.644 21.42a10 10 0 0 0 7.631-.38" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
      </svg>);
}
