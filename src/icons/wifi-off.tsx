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
      ><path d="M12 20h.01" className="al-primary al-anim-pulse-element al-delay-0" style={{}} />
        <path d="M8.5 16.429a5 5 0 0 1 7 0" className="al-secondary al-anim-pulse-element al-delay-1" style={{}} />
        <path d="M5 12.859a10 10 0 0 1 5.17-2.69" className="al-secondary al-anim-pulse-element al-delay-2" style={{}} />
        <path d="M19 12.859a10 10 0 0 0-2.007-1.523" className="al-secondary al-anim-pulse-element al-delay-3" style={{}} />
        <path d="M2 8.82a15 15 0 0 1 4.177-2.643" className="al-secondary al-anim-pulse-element al-delay-4" style={{}} />
        <path d="M22 8.82a15 15 0 0 0-11.288-3.764" className="al-secondary al-anim-pulse-element al-delay-5" style={{}} />
        <path d="m2 2 20 20" className="al-secondary al-anim-pulse-element al-delay-6" style={{}} />
      </svg>);
}
