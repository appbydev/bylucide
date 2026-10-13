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
      ><path d="m6 17 5-5-5-5" className="al-primary al-anim-nudge al-delay-0" style={{ '--al-tx': '1px', '--al-ty': '0px' }} />
        <path d="m13 17 5-5-5-5" className="al-secondary al-anim-nudge al-delay-1" style={{ '--al-tx': '2px', '--al-ty': '0px' }} />
      </svg>);
}
