'use client';
import * as React from 'react';
import { motion, useAnimation, type Variants, type Transition } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const ARROW_VARIANTS: Variants = {
    normal: {
        scale: 1,
        translateX: 0,
        translateY: 0,
    },
    animate: {
        scale: [1, 0.85, 1],
        translateX: [0, -4, 0],
        translateY: [0, 4, 0],
        originX: 1,
        originY: 0,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <motion.g animate={controls} variants={ARROW_VARIANTS}>
          <path d="M7 7H17"/>
          <path d="M17 7V17"/>
          <path d="M7 17L17 7"/>
        </motion.g>
      </svg>);
}
