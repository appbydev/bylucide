'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const PATH_VARIANTS: Variants = {
    normal: {
        y: 0,
        x: 0,
        transition: {
            duration: 0.2,
            type: "spring",
            velocity: 0,
            stiffness: 200,
            damping: 25,
        },
    },
    animate: {
        y: -1.5,
        x: [-1, 1, -1, 1, -1, 0],
        transition: {
            y: {
                duration: 0.2,
                type: "spring",
                velocity: 0,
                stiffness: 200,
                damping: 25,
            },
            x: {
                duration: 0.3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
            },
        },
    },
};
const SECONDARY_PATH_VARIANTS: Variants = {
    normal: {
        y: 0,
        x: 0,
        transition: {
            duration: 0.2,
            type: "spring",
            velocity: 0,
            stiffness: 200,
            damping: 25,
        },
    },
    animate: {
        y: -2.5,
        x: [-2, 2, -2, 2, -2, 0],
        transition: {
            y: {
                duration: 0.2,
                type: "spring",
                velocity: 0,
                stiffness: 200,
                damping: 25,
            },
            x: {
                duration: 0.3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
            },
        },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<motion.svg fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} style={{ color,  overflow: "visible" }} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <motion.circle animate={controls} cx="12" cy="13" initial="normal" r="8" variants={PATH_VARIANTS}/>
        <motion.path animate={controls} d="M5 3 2 6" initial="normal" variants={SECONDARY_PATH_VARIANTS}/>
        <motion.path animate={controls} d="m22 6-3-3" initial="normal" variants={SECONDARY_PATH_VARIANTS}/>
        <motion.path animate={controls} d="M6.38 18.7 4 21" initial="normal" variants={PATH_VARIANTS}/>
        <motion.path animate={controls} d="M17.64 18.67 20 21" initial="normal" variants={PATH_VARIANTS}/>
        <motion.path animate={controls} d="M9 13h6" initial="normal" variants={PATH_VARIANTS}/>
        <motion.path animate={controls} d="M12 10v6" initial="normal" variants={PATH_VARIANTS}/>
      </motion.svg>);
}
