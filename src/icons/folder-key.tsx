'use client';
import * as React from 'react';
import { motion, useAnimation, type Variants, type Transition } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const KEY_VARIANTS: Variants = {
    normal: { rotate: 0, x: 0 },
    animate: {
        rotate: [0, -15, 8, -5, 0],
        x: [0, 0.5, 0],
        transition: {
            duration: 0.9,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
        },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <path d="M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2"/>
          <motion.g animate={controls} initial="normal" style={{ transformOrigin: "16px 18px" }} variants={KEY_VARIANTS}>
            <circle cx="16" cy="20" r="2"/>
            <path d="m22 14-4.5 4.5"/>
            <path d="m21 15 1 1"/>
          </motion.g>
        </svg>);
}
