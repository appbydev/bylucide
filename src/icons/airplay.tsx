'use client';
import { motion, useAnimation, easeInOut, easeOut } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { SvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const DURATION = 0.3;
const SCREEN_VARIANTS = {
    normal: {
        opacity: 1,
        pathLength: 1,
        pathOffset: 0,
        transition: { duration: DURATION },
    },
    animate: {
        opacity: [0, 1],
        pathLength: [0, 1],
        pathOffset: [1, 0],
        transition: {
            duration: DURATION * 2,
            ease: easeInOut,
        },
    },
};
const TRIANGLE_VARIANTS = {
    normal: {
        scale: 1,
        opacity: 1,
        transition: { duration: DURATION },
    },
    animate: {
        scale: [0.6, 1.1, 1],
        opacity: [0, 1],
        transition: {
            duration: DURATION * 2,
            ease: easeOut,
        },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<SvgRoot  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <motion.path animate={controls} d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" variants={SCREEN_VARIANTS}/>
          <motion.path animate={controls} d="M12 15l5 6H7z" variants={TRIANGLE_VARIANTS}/>
        </SvgRoot>);
}
