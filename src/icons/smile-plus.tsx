'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';


export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 const faceVariants: Variants = {
    normal: { scale: 1 },
    animate: {
        scale: 1.1,
        transition: { type: "spring", velocity: 0, stiffness: 200, damping: 20 },
    },
};
const plusVariants: Variants = {
    normal: { rotate: 0, scale: 1 },
    animate: {
        rotate: 90,
        scale: 1.2,
        transition: { type: "spring", velocity: 0, stiffness: 200, damping: 20, delay: 0.1 },
    },
};
 useControlsDriver(register, controls);
 return (<motion.svg  style={{ color }} animate={controls} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} variants={faceVariants} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <path d="M22 11v1a10 10 0 1 1-9-10"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
          <line x1="9" x2="9.01" y1="9" y2="9"/>
          <line x1="15" x2="15.01" y1="9" y2="9"/>
          <motion.path animate={controls} d="M16 5h6" variants={plusVariants}/>
          <motion.path animate={controls} d="M19 2v6" variants={plusVariants}/>
        </motion.svg>);
}
