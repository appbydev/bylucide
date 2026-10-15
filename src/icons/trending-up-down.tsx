'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { MotionSvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const SVG_VARIANTS: Variants = {
    animate: {
        x: 0,
        y: 0,
        translateX: [0, 2, 0],
        transition: {
            duration: 0.5,
        },
    },
};
const PATH_VARIANTS: Variants = {
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
        pathOffset: [1, 0],
        transition: {
            duration: 0.4,
            opacity: { duration: 0.1 },
        },
    },
};
const ARROW_VARIANTS: Variants = {
    normal: {
        opacity: 1,
        pathLength: 1,
        transition: {
            delay: 0.3,
            duration: 0.3,
            opacity: { duration: 0.1, delay: 0.3 },
        },
    },
    animate: {
        opacity: [0, 1],
        pathLength: [0, 1],
        pathOffset: [0.5, 0],
        transition: {
            delay: 0.3,
            duration: 0.3,
            opacity: { duration: 0.1, delay: 0.3 },
        },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<MotionSvgRoot  style={{ color }} animate={controls} fill="none" height={size} initial="normal" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} variants={SVG_VARIANTS} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <motion.path animate={controls} d="M21 21 14.828 14.828" initial="normal" variants={PATH_VARIANTS}/>
        <motion.path animate={controls} d="M21 16v5h-5" initial="normal" variants={ARROW_VARIANTS}/>
        <motion.path animate={controls} d="m21 3-9 9-4-4-6 6" initial="normal" variants={PATH_VARIANTS}/>
        <motion.path animate={controls} d="M21 8V3h-5" initial="normal" variants={ARROW_VARIANTS}/>
      </MotionSvgRoot>);
}
