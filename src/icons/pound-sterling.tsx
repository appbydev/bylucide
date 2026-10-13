'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const POUND_MAIN_VARIANTS: Variants = {
    normal: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 0.4,
            opacity: { duration: 0.1 },
        },
    },
    animate: {
        opacity: [0, 1],
        pathLength: [0, 1],
        transition: {
            duration: 0.6,
            opacity: { duration: 0.1 },
        },
    },
};
const POUND_SECONDARY_VARIANTS: Variants = {
    normal: {
        opacity: 1,
        pathLength: 1,
        pathOffset: 0,
        transition: {
            delay: 0.3,
            duration: 0.3,
            opacity: { duration: 0.1, delay: 0.3 },
        },
    },
    animate: {
        opacity: [0, 1],
        pathLength: [0, 1],
        pathOffset: [1, 0],
        transition: {
            delay: 0.5,
            duration: 0.4,
            opacity: { duration: 0.1, delay: 0.5 },
        },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <motion.path animate={controls} d="M18 7c0-5.333-8-5.333-8 0" initial="normal" variants={POUND_MAIN_VARIANTS}/>
        <motion.path animate={controls} d="M10 7v14" initial="normal" variants={POUND_MAIN_VARIANTS}/>
        <motion.path animate={controls} d="M18 21h-12" initial="normal" variants={POUND_SECONDARY_VARIANTS}/>
        <motion.path animate={controls} d="M16 13h-10" initial="normal" variants={POUND_SECONDARY_VARIANTS}/>
      </svg>);
}
