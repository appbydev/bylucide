'use client';
import * as React from 'react';
import { motion, useAnimation, type Variants, type Transition } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const VARIANTS: Variants = {
    normal: { opacity: 1 },
    animate: (custom: number) => ({
        opacity: [0, 1],
        transition: {
            delay: custom,
            duration: 0.5,
        },
    }),
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <path d="M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"/>
          <motion.path animate={controls} custom={0.2} d="M2 12a9 9 0 0 1 8 8" variants={VARIANTS}/>
          <motion.path animate={controls} custom={0.1} d="M2 16a5 5 0 0 1 4 4" variants={VARIANTS}/>
          <motion.line animate={controls} custom={0} variants={VARIANTS} x1="2" x2="2.01" y1="20" y2="20"/>
        </svg>);
}
