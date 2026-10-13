'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const PATH_VARIANTS: Variants = {
    normal: {
        y: 0,
        opacity: 1,
    },
    animate: (custom: number) => ({
        y: -3,
        opacity: [0, 1, 0],
        transition: {
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.5,
            ease: "easeInOut",
            delay: 0.2 * custom,
        },
    }),
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<svg fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} style={{ color,  overflow: "visible" }} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <motion.path animate={controls} custom={0.2} d="M10 2v2" variants={PATH_VARIANTS}/>
          <motion.path animate={controls} custom={0.4} d="M14 2v2" variants={PATH_VARIANTS}/>
          <motion.path animate={controls} custom={0} d="M6 2v2" variants={PATH_VARIANTS}/>
          <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/>
        </svg>);
}
