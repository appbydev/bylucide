'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const PATH_VARIANTS: Variants = {
    normal: {
        scale: 1,
        transition: {
            repeat: 0,
        },
    },
    animate: {
        scale: [0, 1, 0.8],
    },
};
const SECOND_VARIANTS: Variants = {
    normal: {
        opacity: 1,
    },
    animate: {
        opacity: [1, 0.8, 1],
        transition: { repeat: Number.POSITIVE_INFINITY },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <motion.path animate={controls} d="m7 7 10 10-5 5V2l5 5L7 17" variants={SECOND_VARIANTS}/>
        <motion.path animate={controls} d="M20.83 14.83a4 4 0 0 0 0-5.66" transition={{
        duration: 0.6,
        delay: 0.2,
        repeat: Number.POSITIVE_INFINITY,
    }} variants={PATH_VARIANTS}/>
        <motion.path animate={controls} d="M18 12h.01" transition={{
        duration: 0.6,
        repeat: Number.POSITIVE_INFINITY,
    }} variants={PATH_VARIANTS}/>
      </svg>);
}
