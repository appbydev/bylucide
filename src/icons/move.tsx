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
        <path d="m15 19-3 3-3-3" className="al-secondary al-anim-nudge al-delay-1" style={{ '--al-tx': '0px', '--al-ty': '0px' }} />
        <path d="m19 9 3 3-3 3" className="al-secondary al-anim-nudge al-delay-2" style={{ '--al-tx': '0px', '--al-ty': '0px' }} />
        <path d="M2 12h20" className="al-secondary al-anim-nudge al-delay-3" style={{ '--al-tx': '0px', '--al-ty': '0px' }} />
        <path d="m5 9-3 3 3 3" className="al-secondary al-anim-nudge al-delay-4" style={{ '--al-tx': '0px', '--al-ty': '0px' }} />
        <path d="m9 5 3-3 3 3" className="al-secondary al-anim-nudge al-delay-5" style={{ '--al-tx': '0px', '--al-ty': '0px' }} />
      </svg>);
}
