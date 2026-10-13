'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const WIND_VARIANTS: Variants = {
    normal: (custom: number) => ({
        pathLength: 1,
        opacity: 1,
        pathOffset: 0,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
            delay: custom,
        },
    }),
    animate: (custom: number) => ({
        pathLength: [0, 1],
        opacity: [0, 1],
        pathOffset: [1, 0],
        transition: {
            duration: 0.5,
            ease: "easeInOut",
            delay: custom,
        },
    }),
};
const ARROW_VARIANTS: Variants = {
    normal: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        },
    },
    animate: {
        y: [-10, 0],
        opacity: [0, 1],
        transition: {
            duration: 0.5,
            ease: "easeInOut",
            delay: 0.35,
        },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <motion.path animate={controls} custom={0.2} d="M12.8 21.6A2 2 0 1 0 14 18H2" initial="normal" variants={WIND_VARIANTS}/>
        <motion.path animate={controls} custom={0.4} d="M17.5 10a2.5 2.5 0 1 1 2 4H2" initial="normal" variants={WIND_VARIANTS}/>
        <motion.path animate={controls} d="M10 2v8" initial="normal" variants={ARROW_VARIANTS}/>
        <motion.path animate={controls} d="m6 6 4 4 4-4" initial="normal" variants={ARROW_VARIANTS}/>
      </svg>);
}
