'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const PATH_VARIANTS: Variants = {
    normal: { pathLength: 1 },
    animate: {
        pathLength: [0, 1],
        transition: { duration: 0.4, ease: "linear" },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<motion.svg  style={{ color }} animate={controls} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <motion.path animate={controls} d="M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" initial="normal" variants={PATH_VARIANTS}/>
        <motion.path animate={controls} d="M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5" initial="normal" variants={PATH_VARIANTS}/>
        <circle cx="12" cy="12" r="3"/>
        <motion.path animate={controls} d="m18 22-3-3 3-3" initial="normal" variants={PATH_VARIANTS}/>
        <motion.path animate={controls} d="m6 2 3 3-3 3" initial="normal" variants={PATH_VARIANTS}/>
      </motion.svg>);
}
