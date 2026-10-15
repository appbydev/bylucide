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
        translateY: [0, 2, 0],
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
        <motion.polyline animate={controls} initial="normal" points="22 17 13.5 8.5 8.5 13.5 2 7" variants={PATH_VARIANTS}/>
        <motion.polyline animate={controls} initial="normal" points="16 17 22 17 22 11" variants={ARROW_VARIANTS}/>
      </MotionSvgRoot>);
}
