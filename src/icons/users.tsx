'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { SvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const PATH_VARIANTS: Variants = {
    normal: {
        translateX: 0,
        transition: {
            type: "spring",
            velocity: 0,
            stiffness: 200,
            damping: 13,
        },
    },
    animate: {
        translateX: [-6, 0],
        transition: {
            delay: 0.1,
            type: "spring",
            velocity: 0,
            stiffness: 200,
            damping: 13,
        },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<SvgRoot  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <motion.path animate={controls} d="M22 21v-2a4 4 0 0 0-3-3.87" variants={PATH_VARIANTS}/>
          <motion.path animate={controls} d="M16 3.13a4 4 0 0 1 0 7.75" variants={PATH_VARIANTS}/>
        </SvgRoot>);
}
