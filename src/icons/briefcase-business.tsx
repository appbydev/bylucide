'use client';
import * as React from 'react';
import { motion, useAnimation, type Variants, type Transition } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const SWAY_VARIANTS: Variants = {
    normal: {
        rotate: 0,
        transition: {
            duration: 0.3,
            ease: "easeOut",
        },
    },
    animate: {
        rotate: [0, 4, -3, 2, 0],
        transition: {
            duration: 0.9,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
        },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<motion.svg animate={controls} fill="none" height={size} initial="normal" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} style={{ color,  transformOrigin: "12px 4px" }} variants={SWAY_VARIANTS} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12h.01"/>
        <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <path d="M22 13a18.15 18.15 0 0 1-20 0"/>
        <rect height="14" rx="2" width="20" x="2" y="6"/>
      </motion.svg>);
}
