'use client';
import * as React from 'react';
import { motion, useAnimation, type Variants, type Transition } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const DOT_VARIANTS: Variants = {
    normal: {
        opacity: 1,
    },
    animate: (custom: number) => ({
        opacity: [1, 0, 0, 1, 1, 0, 0, 1],
        transition: {
            opacity: {
                times: [
                    0,
                    0.1,
                    0.1 + custom * 0.1,
                    0.1 + custom * 0.1 + 0.1,
                    0.5,
                    0.6,
                    0.6 + custom * 0.1,
                    0.6 + custom * 0.1 + 0.1,
                ],
                duration: 1.5,
            },
        },
    }),
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <motion.path animate={controls} custom={0} d="M8 10h.01" variants={DOT_VARIANTS}/>
        <motion.path animate={controls} custom={1} d="M12 10h.01" variants={DOT_VARIANTS}/>
        <motion.path animate={controls} custom={2} d="M16 10h.01" variants={DOT_VARIANTS}/>
      </svg>);
}
