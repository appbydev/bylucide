'use client';
import * as React from 'react';
import { motion, useAnimation, type Variants, type Transition } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const HAND_TRANSITION: Transition = {
    duration: 0.6,
    ease: [0.4, 0, 0.2, 1],
};
const HAND_VARIANTS: Variants = {
    normal: {
        rotate: 0,
        originX: "0%",
        originY: "100%",
    },
    animate: {
        rotate: 360,
        originX: "0%",
        originY: "100%",
    },
};
const MINUTE_HAND_TRANSITION: Transition = {
    duration: 0.5,
    ease: "easeInOut",
};
const MINUTE_HAND_VARIANTS: Variants = {
    normal: {
        rotate: 0,
        originX: "0%",
        originY: "100%",
    },
    animate: {
        rotate: 45,
        originX: "0%",
        originY: "100%",
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10"/>
          <motion.line animate={controls} initial="normal" transition={HAND_TRANSITION} variants={HAND_VARIANTS} x1="12" x2="12" y1="12" y2="6"/>
          <motion.line animate={controls} initial="normal" transition={MINUTE_HAND_TRANSITION} variants={MINUTE_HAND_VARIANTS} x1="12" x2="16" y1="12" y2="12"/>
        </svg>);
}
