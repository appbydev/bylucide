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
      ><path d="m16 3 4 4-4 4" className="al-primary al-anim-nudge al-delay-0" style={{ '--al-tx': '1px', '--al-ty': '0px' }} />
        <path d="M20 7H4" className="al-secondary al-anim-nudge al-delay-1" style={{ '--al-tx': '2px', '--al-ty': '0px' }} />
        <path d="m8 21-4-4 4-4" className="al-secondary al-anim-nudge al-delay-2" style={{ '--al-tx': '2px', '--al-ty': '0px' }} />
        <path d="M4 17h16" className="al-secondary al-anim-nudge al-delay-3" style={{ '--al-tx': '2px', '--al-ty': '0px' }} />
      </svg>);
}
