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
      ><path d="M14.564 14.558a3 3 0 1 1-4.122-4.121" className="al-primary al-anim-fill al-delay-0" style={{}} />
        <path d="m2 2 20 20" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M20 20H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 .819-.175" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M9.695 4.024A2 2 0 0 1 10.004 4h3.993a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v7.344" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
      </svg>);
}
