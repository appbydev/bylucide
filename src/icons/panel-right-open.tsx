'use client';
import { motion, useAnimation, type Variants, type Transition } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const DEFAULT_TRANSITION: Transition = {
    times: [0, 0.4, 1],
    duration: 0.5,
};
const PATH_VARIANTS: Variants = {
    normal: { x: 0 },
    animate: { x: [0, -1.5, 0] },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <rect height="18" rx="2" width="18" x="3" y="3"/>
        <path d="M15 3v18"/>
        <motion.path animate={controls} d="m10 15-3-3 3-3" transition={DEFAULT_TRANSITION} variants={PATH_VARIANTS}/>
      </svg>);
}
