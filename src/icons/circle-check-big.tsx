'use client';
import * as React from 'react';
import { motion, useAnimation, type Variants, type Transition } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const CIRCLE_VARIANTS: Variants = {
    normal: {
        pathLength: 1,
        transition: { duration: 0.3 },
    },
    animate: {
        pathLength: [0, 1],
        transition: {
            duration: 0.5,
            ease: 'easeInOut',
        },
    },
};
const CHECK_VARIANTS: Variants = {
    normal: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 0.3,
            opacity: { duration: 0.1 },
        },
    },
    animate: {
        opacity: [0, 1],
        pathLength: [0, 1],
        transition: {
            duration: 0.35,
            delay: 0.45,
            opacity: { duration: 0.05 },
        },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <motion.path animate={controls} d="M21.801 10A10 10 0 1 1 17 3.335" initial="normal" variants={CIRCLE_VARIANTS} style={{ pathLength: 1 }}/>
        <motion.path animate={controls} d="m9 11 3 3L22 4" initial="normal" variants={CHECK_VARIANTS} style={{ pathLength: 1 }}/>
      </svg>);
}
