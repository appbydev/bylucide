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
      ><circle cx="12" cy="12" r="3" className="al-primary al-anim-scale-pop al-delay-0" style={{}} />
        <path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5" className="al-secondary al-anim-scale-pop al-delay-1" style={{}} />
        <path d="M12 7.5V9" className="al-secondary al-anim-scale-pop al-delay-2" style={{}} />
        <path d="M7.5 12H9" className="al-secondary al-anim-scale-pop al-delay-3" style={{}} />
        <path d="M16.5 12H15" className="al-secondary al-anim-scale-pop al-delay-4" style={{}} />
        <path d="M12 16.5V15" className="al-secondary al-anim-scale-pop al-delay-5" style={{}} />
        <path d="m8 8 1.88 1.88" className="al-secondary al-anim-scale-pop al-delay-6" style={{}} />
        <path d="M14.12 9.88 16 8" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <path d="m8 16 1.88-1.88" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
        <path d="M14.12 14.12 16 16" className="al-secondary al-anim-scale-pop al-delay-7" style={{}} />
      </svg>);
}
