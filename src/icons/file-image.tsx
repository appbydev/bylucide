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
      ><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" className="al-primary al-anim-fill al-delay-0" style={{}} />
        <path d="M14 2v5a1 1 0 0 0 1 1h5" className="al-secondary al-anim-fade al-delay-1" style={{}} />
        <circle cx="10" cy="12" r="2" className="al-secondary al-anim-fade al-delay-2" style={{}} />
        <path d="m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22" className="al-secondary al-anim-fade al-delay-3" style={{}} />
      </svg>);
}
