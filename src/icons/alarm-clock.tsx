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
 return (<svg fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} style={{ color,  overflow: "visible" }} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <motion.path animate={controls} d="M18 20.5L19.5 22" initial="normal" variants={PATH_VARIANTS}/>
          <motion.path animate={controls} d="M6 20.5L4.5 22" initial="normal" variants={PATH_VARIANTS}/>
          <motion.path animate={controls} d="M21 13C21 17.968 16.968 22 12 22C7.032 22 3 17.968 3 13C3 8.032 7.032 4 12 4C16.968 4 21 8.032 21 13Z" initial="normal" variants={PATH_VARIANTS}/>
          <motion.path animate={controls} d="M15.339 15.862L12.549 14.197C12.063 13.909 11.667 13.216 11.667 12.649V8.95898" initial="normal" variants={PATH_VARIANTS}/>
          <motion.path animate={controls} d="M18 2L21.747 5.31064" initial="normal" variants={SECONDARY_PATH_VARIANTS}/>
          <motion.path animate={controls} d="M6 2L2.25304 5.31064" initial="normal" variants={SECONDARY_PATH_VARIANTS}/>
        </svg>);
}
