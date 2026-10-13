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
      ><path d="M12 2v8" className="al-primary al-anim-gear al-delay-0" style={{ '--al-rotation': '45deg' }} />
        <path d="m4.93 10.93 1.41 1.41" className="al-secondary al-anim-fade al-delay-1" style={{ '--al-rotation': '45deg' }} />
        <path d="M2 18h2" className="al-secondary al-anim-fade al-delay-2" style={{ '--al-rotation': '45deg' }} />
        <path d="M20 18h2" className="al-secondary al-anim-fade al-delay-3" style={{ '--al-rotation': '45deg' }} />
        <path d="m19.07 10.93-1.41 1.41" className="al-secondary al-anim-fade al-delay-4" style={{ '--al-rotation': '45deg' }} />
        <path d="M22 22H2" className="al-secondary al-anim-fade al-delay-5" style={{ '--al-rotation': '45deg' }} />
        <path d="m8 6 4-4 4 4" className="al-secondary al-anim-fade al-delay-6" style={{ '--al-rotation': '45deg' }} />
        <path d="M16 18a4 4 0 0 0-8 0" className="al-secondary al-anim-fade al-delay-7" style={{ '--al-rotation': '45deg' }} />
      </svg>);
}
