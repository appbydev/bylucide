'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { SvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const BOOKMARK_VARIANTS: Variants = {
    normal: { scaleY: 1, scaleX: 1 },
    animate: {
        scaleY: [1, 1.3, 0.9, 1.05, 1],
        scaleX: [1, 0.9, 1.1, 0.95, 1],
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};
const CHECK_VARIANTS: Variants = {
    normal: { opacity: 1, strokeDashoffset: 0 },
    animate: {
        strokeDashoffset: [1, 0],
        opacity: [0, 1],
        transition: {
            duration: 0.3,
            ease: "easeOut",
        },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<SvgRoot  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <motion.path animate={controls} d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" style={{ originX: 0.5, originY: 0.5 }} variants={BOOKMARK_VARIANTS}/>

        <motion.path animate={controls} d="m9 10 2 2 4-4" initial="normal" pathLength="1" strokeDasharray="1 1" variants={CHECK_VARIANTS}/>
      </SvgRoot>);
}
