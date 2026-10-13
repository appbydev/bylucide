'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const DASH_VARIANTS: Variants = {
    normal: { translateY: 0 },
    animate: {
        translateY: [0, 1, 0],
        transition: {
            duration: 0.4,
        },
    },
};
const ARROW_VARIANTS: Variants = {
    normal: { translateY: 0 },
    animate: {
        translateY: [0, 3, 0],
        transition: {
            duration: 0.4,
        },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <motion.path animate={controls} d="M15 5H9" variants={DASH_VARIANTS}/>
        <motion.path animate={controls} d="M15 9v3h4l-7 7-7-7h4V9z" variants={ARROW_VARIANTS}/>
      </svg>);
}
