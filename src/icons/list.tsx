'use client';
import * as React from 'react';
import { motion, useAnimation, type Variants, type Transition } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';
const createLineVariants = (delay: number): Variants => ({
    normal: {
        opacity: 1,
        pathLength: 1,
        transition: { duration: 0.2 },
    },
    animate: {
        opacity: [0, 1],
        pathLength: [0, 1],
        transition: {
            duration: 0.25,
            delay,
            opacity: { duration: 0.05 },
        },
    },
});
const LINE_DELAYS = [0, 0.06, 0.12, 0.18, 0.24, 0.3];
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <motion.path animate={controls} d="M3 5h.01" initial="normal" variants={createLineVariants(LINE_DELAYS[0]!)}/>
          <motion.path animate={controls} d="M3 12h.01" initial="normal" variants={createLineVariants(LINE_DELAYS[1]!)}/>
          <motion.path animate={controls} d="M3 19h.01" initial="normal" variants={createLineVariants(LINE_DELAYS[2]!)}/>
          <motion.path animate={controls} d="M8 5h13" initial="normal" variants={createLineVariants(LINE_DELAYS[3]!)}/>
          <motion.path animate={controls} d="M8 12h13" initial="normal" variants={createLineVariants(LINE_DELAYS[4]!)}/>
          <motion.path animate={controls} d="M8 19h13" initial="normal" variants={createLineVariants(LINE_DELAYS[5]!)}/>
        </svg>);
}
