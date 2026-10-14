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
          <motion.path animate={controls} d="M8 3v3a2 2 0 0 1-2 2H3" transition={DEFAULT_TRANSITION} variants={{
        normal: { translateX: "0%", translateY: "0%" },
        animate: { translateX: "2px", translateY: "2px" },
    }}/>
          <motion.path animate={controls} d="M21 8h-3a2 2 0 0 1-2-2V3" transition={DEFAULT_TRANSITION} variants={{
        normal: { translateX: "0%", translateY: "0%" },
        animate: { translateX: "-2px", translateY: "2px" },
    }}/>
          <motion.path animate={controls} d="M3 16h3a2 2 0 0 1 2 2v3" transition={DEFAULT_TRANSITION} variants={{
        normal: { translateX: "0%", translateY: "0%" },
        animate: { translateX: "2px", translateY: "-2px" },
    }}/>
          <motion.path animate={controls} d="M16 21v-3a2 2 0 0 1 2-2h3" transition={DEFAULT_TRANSITION} variants={{
        normal: { translateX: "0%", translateY: "0%" },
        animate: { translateX: "-2px", translateY: "-2px" },
    }}/>
        </svg>);
}
