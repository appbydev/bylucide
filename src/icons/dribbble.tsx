'use client';
import * as React from 'react';
import { motion, useAnimation, type Variants, type Transition } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const CIRCLE_VARIANTS: Variants = {
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
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const circleControls = useAnimation();
const path1Controls = useAnimation();
const path2Controls = useAnimation();
const path3Controls = useAnimation();
 
 useControlsDriver(register, circleControls, path1Controls, path2Controls, path3Controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <motion.circle animate={circleControls} cx="12" cy="12" initial="normal" r="10" variants={CIRCLE_VARIANTS}/>
          <motion.path animate={path1Controls} d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" initial="normal" variants={PATH_VARIANTS}/>
          <motion.path animate={path2Controls} d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" initial="normal" variants={PATH_VARIANTS}/>
          <motion.path animate={path3Controls} d="M8.56 2.75c4.37 6 6 9.42 8 17.72" initial="normal" variants={PATH_VARIANTS}/>
        </svg>);
}
