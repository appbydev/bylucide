'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const CHECK_VARIANTS: Variants = {
    normal: {
        pathLength: 1,
        opacity: 1,
        transition: {
            duration: 0.3,
        },
    },
    animate: {
        pathLength: [0, 1],
        opacity: [0, 1],
        transition: {
            pathLength: { duration: 0.4, ease: "easeInOut" },
            opacity: { duration: 0.4, ease: "easeInOut" },
        },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.7.7 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/>
        <motion.path animate={controls} d="m9 11 2 2 4-4" initial="normal" style={{ transformOrigin: "center" }} variants={CHECK_VARIANTS}/>
      </svg>);
}
