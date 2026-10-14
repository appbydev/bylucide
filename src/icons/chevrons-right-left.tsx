'use client';
import { motion, useAnimation, type Transition } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const DEFAULT_TRANSITION: Transition = {
    type: "spring",
    velocity: 0,
    stiffness: 250,
    damping: 25,
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <motion.path animate={controls} d="m20 17-5-5 5-5" initial="normal" transition={DEFAULT_TRANSITION} variants={{
        normal: { translateX: "0%" },
        animate: { translateX: "-2px" },
    }}/>
        <motion.path animate={controls} d="m4 17 5-5-5-5" initial="normal" transition={DEFAULT_TRANSITION} variants={{
        normal: { translateX: "0%" },
        animate: { translateX: "2px" },
    }}/>
      </svg>);
}
