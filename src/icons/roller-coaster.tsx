'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { SvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const VARIANTS: Variants = {
    normal: {
        pathLength: 1,
        opacity: 1,
    },
    animate: (custom: number) => ({
        pathLength: [0, 1],
        opacity: [0, 1],
        transition: {
            delay: 0.1 * custom,
            opacity: { delay: 0.1 * custom },
        },
    }),
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<SvgRoot  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <motion.path animate={controls} d="M6 19V5" variants={VARIANTS}/>
        <motion.path animate={controls} d="M10 19V6.8" variants={VARIANTS}/>
        <motion.path animate={controls} d="M14 19v-7.8" variants={VARIANTS}/>
        <motion.path animate={controls} d="M18 5v4" variants={VARIANTS}/>
        <motion.path animate={controls} d="M18 19v-6" variants={VARIANTS}/>
        <motion.path animate={controls} d="M22 19V9" variants={VARIANTS}/>
        <motion.path animate={controls} custom={2} d="M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65" variants={VARIANTS}/>
      </SvgRoot>);
}
