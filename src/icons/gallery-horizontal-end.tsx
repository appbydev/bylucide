'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { SvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const PATH_VARIANTS: Variants = {
    normal: {
        translateX: 0,
        opacity: 1,
        transition: {
            type: "tween",
            stiffness: 200,
            damping: 13,
        },
    },
    animate: (i: number) => ({
        translateX: [2 * i, 0],
        opacity: [0, 1],
        transition: {
            delay: 0.25 * (2 - i),
            type: "tween",
            stiffness: 200,
            damping: 13,
        },
    }),
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<SvgRoot  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <motion.path animate={controls} custom={2} d="M6 5v14" variants={PATH_VARIANTS}/>
        <motion.path animate={controls} custom={1} d="M2 7v10" variants={PATH_VARIANTS}/>
        <rect height="18" rx="2" width="12" x="10" y="3"/>
      </SvgRoot>);
}
