'use client';
import * as React from 'react';
import { motion, useAnimation, type Variants, type Transition } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
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
const PLUS_LINE_VARIANTS: Variants = {
    normal: { strokeDashoffset: 0, opacity: 1 },
    animate: (i: number) => ({
        strokeDashoffset: [1, 0],
        opacity: 1,
        transition: {
            duration: 0.3,
            ease: "easeOut",
            delay: i * 0.1,
        },
    }),
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <motion.path animate={controls} d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" style={{ originX: 0.5, originY: 0.5 }} variants={BOOKMARK_VARIANTS}/>

        <motion.line animate={controls} custom={0} initial="normal" pathLength="1" strokeDasharray="1 1" variants={PLUS_LINE_VARIANTS} x1="12" x2="12" y1="7" y2="13"/>
        <motion.line animate={controls} custom={1} initial="normal" pathLength="1" strokeDasharray="1 1" variants={PLUS_LINE_VARIANTS} x1="15" x2="9" y1="10" y2="10"/>
      </svg>);
}
