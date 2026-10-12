'use client';
import * as React from 'react';
import { motion, useAnimation, type Variants, type Transition } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const DASH_VARIANTS: Variants = {
    normal: { translateX: 0 },
    animate: {
        translateX: [0, 1, 0],
        transition: {
            duration: 0.4,
        },
    },
};
const ARROW_VARIANTS: Variants = {
    normal: { translateX: 0 },
    animate: {
        translateX: [0, 3, 0],
        transition: {
            duration: 0.4,
        },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <motion.path animate={controls} d="M5 9v6" variants={DASH_VARIANTS}/>
        <motion.path animate={controls} d="M9 9h3V5l7 7-7 7v-4H9V9z" variants={ARROW_VARIANTS}/>
      </svg>);
}
