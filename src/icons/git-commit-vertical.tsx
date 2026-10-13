'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
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
            delay: 0.15 * custom,
            opacity: { delay: 0.1 * custom },
        },
    }),
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <motion.path animate={controls} custom={0} d="M12 3v6" variants={VARIANTS}/>
        <motion.circle animate={controls} custom={1} cx="12" cy="12" r="3" variants={VARIANTS}/>
        <motion.path animate={controls} custom={2} d="M12 15v6" variants={VARIANTS}/>
      </svg>);
}
