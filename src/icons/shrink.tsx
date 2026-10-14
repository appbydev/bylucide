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
          <motion.path animate={controls} d="M9 4.2V9m0 0H4.2M9 9 3 3" transition={DEFAULT_TRANSITION} variants={{
        normal: { translateX: "0%", translateY: "0%" },
        animate: { translateX: "1px", translateY: "1px" },
    }}/>
          <motion.path animate={controls} d="M15 4.2V9m0 0h4.8M15 9l6-6" transition={DEFAULT_TRANSITION} variants={{
        normal: { translateX: "0%", translateY: "0%" },
        animate: { translateX: "-1px", translateY: "1px" },
    }}/>
          <motion.path animate={controls} d="M9 19.8V15m0 0H4.2M9 15l-6 6" transition={DEFAULT_TRANSITION} variants={{
        normal: { translateX: "0%", translateY: "0%" },
        animate: { translateX: "1px", translateY: "-1px" },
    }}/>
          <motion.path animate={controls} d="m15 15 6 6m-6-6v4.8m0-4.8h4.8" transition={DEFAULT_TRANSITION} variants={{
        normal: { translateX: "0%", translateY: "0%" },
        animate: { translateX: "-1px", translateY: "-1px" },
    }}/>
        </svg>);
}
