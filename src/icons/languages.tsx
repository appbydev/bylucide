'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { MotionSvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const PATH_VARIANTS: Variants = {
    normal: { opacity: 1, pathLength: 1, pathOffset: 0 },
    animate: (custom: number) => ({
        opacity: [0, 1],
        pathLength: [0, 1],
        pathOffset: [1, 0],
        transition: {
            opacity: { duration: 0.01, delay: custom * 0.1 },
            pathLength: {
                type: "spring",
                velocity: 0,
                duration: 0.5,
                bounce: 0,
                delay: custom * 0.1,
            },
        },
    }),
};
const SVG_VARIANTS: Variants = {
    normal: { opacity: 1 },
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const svgControls = useAnimation();
const pathControls = useAnimation();
 
 useControlsDriver(register, svgControls, pathControls);
 return (<MotionSvgRoot  style={{ color }} animate={svgControls} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} variants={SVG_VARIANTS} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <motion.path animate={pathControls} custom={3} d="m5 8 6 6" variants={PATH_VARIANTS}/>
          <motion.path animate={pathControls} custom={2} d="m4 14 6-6 3-3" variants={PATH_VARIANTS}/>
          <motion.path animate={pathControls} custom={1} d="M2 5h12" variants={PATH_VARIANTS}/>
          <motion.path animate={pathControls} custom={0} d="M7 2h1" variants={PATH_VARIANTS}/>
          <motion.path animate={pathControls} custom={3} d="m22 22-5-10-5 10" variants={PATH_VARIANTS}/>
          <motion.path animate={pathControls} custom={3} d="M14 18h6" variants={PATH_VARIANTS}/>
        </MotionSvgRoot>);
}
