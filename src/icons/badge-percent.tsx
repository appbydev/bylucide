'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { SvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const PATH_VARIANTS: Variants = {
    normal: {
        rotate: 0,
        transition: {
            type: "spring",
            velocity: 0,
            stiffness: 60,
            damping: 10,
            duration: 0.5,
        },
    },
    animate: {
        rotate: 180,
        transition: {
            delay: 0.1,
            type: "spring",
            velocity: 0,
            stiffness: 80,
            damping: 13,
        },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<SvgRoot  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <motion.path animate={controls} d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" variants={PATH_VARIANTS}/>
        <path d="m15 9-6 6"/>
        <path d="M9 9h.01"/>
        <path d="M15 15h.01"/>
      </SvgRoot>);
}
