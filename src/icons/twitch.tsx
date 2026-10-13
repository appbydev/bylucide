'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const PATH_VARIANTS: Variants = {
    normal: {
        opacity: 1,
        pathLength: 1,
        pathOffset: 0,
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
            duration: 0.6,
            ease: "linear",
            opacity: { duration: 0.1 },
        },
    },
};
const LINE_VARIANTS: Variants = {
    normal: {
        opacity: 1,
        pathLength: 1,
        pathOffset: 0,
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
            duration: 0.6,
            ease: "linear",
            opacity: { duration: 0.1 },
        },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const pathControls = useAnimation();
const line1Controls = useAnimation();
const line2Controls = useAnimation();
 
 useControlsDriver(register, pathControls, line1Controls, line2Controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <motion.path animate={pathControls} d="M21 2H3v16h5v4l4-4h5l4-4V2z" initial="normal" variants={PATH_VARIANTS}/>
          <motion.path animate={line1Controls} d="M11 11V7" initial="normal" variants={LINE_VARIANTS}/>
          <motion.path animate={line2Controls} d="M16 11V7" initial="normal" variants={LINE_VARIANTS}/>
        </svg>);
}
