'use client';
import { motion, useAnimation, type Transition } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const DEFAULT_TRANSITION: Transition = {
    type: "spring",
    velocity: 0,
    stiffness: 160,
    damping: 17,
    mass: 1,
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <motion.path animate={controls} d="m12 14 4-4" transition={DEFAULT_TRANSITION} variants={{
        animate: { translateX: 0.5, translateY: 3, rotate: 72 },
        normal: {
            translateX: 0,
            rotate: 0,
            translateY: 0,
        },
    }}/>
          <path d="M3.34 19a10 10 0 1 1 17.32 0"/>
        </svg>);
}
