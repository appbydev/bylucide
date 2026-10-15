'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { MotionSvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const SATELLITE_DISH_VARIANTS: Variants = {
    normal: {
        y: 0,
        rotate: 0,
    },
    animate: {
        y: [0, 1, 2, 0],
        rotate: [0, -15, 0],
        transition: {
            duration: 1.5,
            ease: "easeInOut",
        },
    },
};
const PATH_VARIANTS: Variants = {
    normal: {
        opacity: 1,
        transition: {
            duration: 1.1,
        },
    },
    fadeOut: {
        opacity: 0,
        transition: { duration: 1.1 },
    },
    fadeIn: (i: number) => ({
        opacity: 1,
        transition: {
            type: "spring",
            velocity: 0,
            stiffness: 300,
            damping: 20,
            delay: i * 0.1,
        },
    }),
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const svgControls = useAnimation();
const pathControls = useAnimation();
 
 useControlsDriver(register, svgControls, pathControls);
 return (<MotionSvgRoot  style={{ color }} animate={svgControls} fill="none" height={size} initial="normal" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} variants={SATELLITE_DISH_VARIANTS} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <path d="M4 10a7.31 7.31 0 0 0 10 10Z"/>
        <path d="m9 15 3-3"/>
        <motion.path animate={pathControls} custom={1} d="M17 13a6 6 0 0 0-6-6" initial={{ opacity: 1 }} variants={PATH_VARIANTS}/>
        <motion.path animate={pathControls} custom={2} d="M21 13A10 10 0 0 0 11 3" initial={{ opacity: 1 }} variants={PATH_VARIANTS}/>
      </MotionSvgRoot>);
}
