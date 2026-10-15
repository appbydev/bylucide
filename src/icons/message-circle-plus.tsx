'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { SvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const PLUS_VARIANTS: Variants = {
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
const PLUS_HORIZONTAL_VARIANTS: Variants = {
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
            pathLength: { duration: 0.4, ease: "easeInOut", delay: 0.2 },
            opacity: { duration: 0.4, ease: "easeInOut", delay: 0.2 },
        },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<SvgRoot  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/>
        <motion.path animate={controls} d="M12 8v8" initial="normal" variants={PLUS_VARIANTS}/>
        <motion.path animate={controls} d="M8 12h8" initial="normal" variants={PLUS_HORIZONTAL_VARIANTS}/>
      </SvgRoot>);
}
