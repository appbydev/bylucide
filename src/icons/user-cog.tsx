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
      ><path d="M10 15H6a4 4 0 0 0-4 4v2" className="al-primary al-anim-fade al-delay-0" style={{}} />
        <path d="m14.305 16.53.923-.382" className="al-secondary al-anim-fade al-delay-1" style={{}} />
        <path d="m15.228 13.852-.923-.383" className="al-secondary al-anim-fade al-delay-2" style={{}} />
        <path d="m16.852 12.228-.383-.923" className="al-secondary al-anim-fade al-delay-3" style={{}} />
        <path d="m16.852 17.772-.383.924" className="al-secondary al-anim-fade al-delay-4" style={{}} />
        <path d="m19.148 12.228.383-.923" className="al-secondary al-anim-fade al-delay-5" style={{}} />
        <path d="m19.53 18.696-.382-.924" className="al-secondary al-anim-fade al-delay-6" style={{}} />
        <path d="m20.772 13.852.924-.383" className="al-secondary al-anim-fade al-delay-7" style={{}} />
        <path d="m20.772 16.148.924.383" className="al-secondary al-anim-fade al-delay-7" style={{}} />
        <circle cx="18" cy="15" r="3" className="al-secondary al-anim-fill al-delay-7" style={{}} />
        <circle cx="9" cy="7" r="4" className="al-secondary al-anim-fill al-delay-7" style={{}} />
      </svg>);
}
