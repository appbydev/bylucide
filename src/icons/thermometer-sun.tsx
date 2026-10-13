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
      ><path d="M12 2v2" className="al-primary al-anim-gear al-delay-0" style={{ '--al-rotation': '45deg' }} />
        <path d="M12 8a4 4 0 0 0-1.645 7.647" className="al-secondary al-anim-fade al-delay-1" style={{ '--al-rotation': '45deg' }} />
        <path d="M2 12h2" className="al-secondary al-anim-fade al-delay-2" style={{ '--al-rotation': '45deg' }} />
        <path d="M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" className="al-secondary al-anim-fade al-delay-3" style={{ '--al-rotation': '45deg' }} />
        <path d="m4.93 4.93 1.41 1.41" className="al-secondary al-anim-fade al-delay-4" style={{ '--al-rotation': '45deg' }} />
        <path d="m6.34 17.66-1.41 1.41" className="al-secondary al-anim-fade al-delay-5" style={{ '--al-rotation': '45deg' }} />
      </svg>);
}
