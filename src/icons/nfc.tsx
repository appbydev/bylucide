'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useSequenceDriver } from '../icon-runtime';

const PATH_VARIANTS: Variants = {
    normal: {
        opacity: 1,
        transition: {
            duration: 0.4,
        },
    },
    fadeOut: {
        opacity: 0,
        transition: { duration: 0.3 },
    },
    fadeIn: (i: number) => ({
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: i * 0.1,
        },
    }),
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useSequenceDriver(register, ["fadeOut","fadeIn"], 'normal', controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <motion.path animate={controls} custom={0} d="M6 8.32a7.43 7.43 0 0 1 0 7.36" initial={{ opacity: 1 }} variants={PATH_VARIANTS}/>
          <motion.path animate={controls} custom={1} d="M9.46 6.21a11.76 11.76 0 0 1 0 11.58" initial={{ opacity: 1 }} variants={PATH_VARIANTS}/>
          <motion.path animate={controls} custom={2} d="M12.91 4.1a15.91 15.91 0 0 1 .01 15.8" initial={{ opacity: 1 }} variants={PATH_VARIANTS}/>
          <motion.path animate={controls} custom={3} d="M16.37 2a20.16 20.16 0 0 1 0 20" initial={{ opacity: 1 }} variants={PATH_VARIANTS}/>
        </svg>);
}
