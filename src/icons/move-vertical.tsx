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
      ><path d="M12 2v20" className="al-primary al-anim-nudge al-delay-0" style={{ '--al-tx': '0px', '--al-ty': '0px' }} />
        <path d="m8 18 4 4 4-4" className="al-secondary al-anim-nudge al-delay-1" style={{ '--al-tx': '0px', '--al-ty': '0px' }} />
        <path d="m8 6 4-4 4 4" className="al-secondary al-anim-nudge al-delay-2" style={{ '--al-tx': '0px', '--al-ty': '0px' }} />
      </svg>);
}
