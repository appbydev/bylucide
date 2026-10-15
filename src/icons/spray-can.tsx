'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { SvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const SPRAY_DOT_VARIANTS: Variants = {
    normal: {
        opacity: 1,
        transition: { duration: 0.2 },
    },
    animate: (index: number) => ({
        opacity: [0, 1, 0],
        transition: {
            delay: index * 0.07,
            duration: 1.05 + index * 0.06,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            times: [0, 0.45, 1],
        },
    }),
};
const DOT_PATHS_RTL = [
    { d: "M11 7h.01", key: "dot-3" },
    { d: "M7 5h.01", key: "dot-2" },
    { d: "M7 9h.01", key: "dot-5" },
    { d: "M3 3h.01", key: "dot-1" },
    { d: "M3 7h.01", key: "dot-4" },
    { d: "M3 11h.01", key: "dot-6" },
] as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<SvgRoot  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <rect height="4" width="4" x="15" y="5"/>
          <path d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"/>
          <path d="m13 14 8-2"/>
          <path d="m13 19 8-2"/>
          <g>
            {DOT_PATHS_RTL.map((item, index) => (<motion.path animate={controls} custom={index} d={item.d} initial="normal" key={item.key} variants={SPRAY_DOT_VARIANTS}/>))}
          </g>
        </SvgRoot>);
}
