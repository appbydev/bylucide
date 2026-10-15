'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { SvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const PATH_VARIANTS: Variants = {
    normal: {
        translateY: 0,
        opacity: 1,
        transition: {
            type: "tween",
            stiffness: 200,
            damping: 13,
        },
    },
    animate: (i: number) => ({
        translateY: [2 * i, 0],
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
        <motion.path animate={controls} custom={1} d="M7 2h10" variants={PATH_VARIANTS}/>
        <motion.path animate={controls} custom={2} d="M5 6h14" variants={PATH_VARIANTS}/>
        <rect height="12" rx="2" width="18" x="3" y="10"/>
      </SvgRoot>);
}
