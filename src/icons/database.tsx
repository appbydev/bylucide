'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';
const createPathVariants = (delay: number, duration = 0.4): Variants => ({
    normal: {
        opacity: 1,
        pathLength: 1,
        transition: { duration: 0.2 },
    },
    animate: {
        opacity: [0, 1],
        pathLength: [0, 1],
        transition: {
            duration,
            delay,
            opacity: { duration: 0.05 },
        },
    },
});

export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <motion.path animate={controls} d="M 3 5 a 9 3 0 1 1 18 0 a 9 3 0 1 1 -18 0" initial="normal" variants={createPathVariants(0, 0.35)}/>
          <motion.path animate={controls} d="M3 5V19A9 3 0 0 0 21 19V5" initial="normal" variants={createPathVariants(0.3, 0.45)}/>
          <motion.path animate={controls} d="M3 12A9 3 0 0 0 21 12" initial="normal" variants={createPathVariants(0.6, 0.35)}/>
        </svg>);
}
