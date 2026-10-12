'use client';
import * as React from 'react';
import { motion, useAnimation, type Variants, type Transition } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const HEAD_VARIANTS: Variants = {
    normal: {
        translateY: 0,
    },
    animate: {
        translateY: [0, -3, 0],
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
};
const SHAFT_VARIANTS: Variants = {
    normal: {
        translateX: 0,
        translateY: 0,
        scale: 1,
    },
    animate: {
        translateY: [0, -3, 0],
        scale: [1, 0.85, 1],
        originX: 1,
        originY: 1,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<motion.svg animate={controls} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} style={{ color,  overflow: "visible" }} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <motion.path animate={controls} d="M12 2v8" initial="normal" variants={SHAFT_VARIANTS}/>
        <motion.path animate={controls} d="m8 6 4-4 4 4" initial="normal" variants={HEAD_VARIANTS}/>
        <path d="M2 15c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
        <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
      </motion.svg>);
}
