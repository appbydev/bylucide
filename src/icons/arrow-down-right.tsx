'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const HEAD_VARIANTS: Variants = {
    normal: { translateX: 0, translateY: 0 },
    animate: {
        translateX: [0, -3, 0],
        translateY: [0, -3, 0],
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
};
const SHAFT_VARIANTS: Variants = {
    normal: { translateX: 0, translateY: 0, scale: 1 },
    animate: {
        translateX: [0, -3, 0],
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
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <motion.path animate={controls} d="M7 7 L17 17" variants={SHAFT_VARIANTS}/>
        <motion.path animate={controls} d="M17 7v10H7" variants={HEAD_VARIANTS}/>
        <motion.path animate={controls} d="M17 17 L10 17" variants={HEAD_VARIANTS}/>
      </svg>);
}
