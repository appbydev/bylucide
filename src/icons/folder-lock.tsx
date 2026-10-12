'use client';
import * as React from 'react';
import { motion, useAnimation, type Variants, type Transition } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const LOCK_VARIANTS: Variants = {
    normal: { y: 0, rotate: 0 },
    animate: {
        y: [0, -1.6, 0],
        rotate: [0, -3, 2, 0],
        transition: {
            duration: 0.7,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
        },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <path d="M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5"/>
          <motion.g animate={controls} initial="normal" style={{ transformOrigin: "18px 19px" }} variants={LOCK_VARIANTS}>
            <rect height="5" rx="1" width="8" x="14" y="17"/>
            <path d="M20 17v-2a2 2 0 1 0-4 0v2"/>
          </motion.g>
        </svg>);
}
