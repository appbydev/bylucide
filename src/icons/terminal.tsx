'use client';
import * as React from 'react';
import { motion, useAnimation, type Variants, type Transition } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const LINE_VARIANTS: Variants = {
    normal: { opacity: 1 },
    animate: {
        opacity: [1, 0, 1],
        transition: {
            duration: 0.8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
        },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <polyline points="4 17 10 11 4 5"/>
          <motion.line animate={controls} initial="normal" variants={LINE_VARIANTS} x1="12" x2="20" y1="19" y2="19"/>
        </svg>);
}
