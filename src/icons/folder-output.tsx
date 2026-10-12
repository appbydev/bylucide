'use client';
import * as React from 'react';
import { motion, useAnimation, type Variants, type Transition } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const ARROW_VARIANTS: Variants = {
    normal: { x: 0 },
    animate: { x: [0, -2, 0] },
};
const ARROW_TRANSITION: Transition = {
    times: [0, 0.4, 1],
    duration: 0.5,
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <path d="M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5"/>
        <motion.g animate={controls} initial="normal" transition={ARROW_TRANSITION} variants={ARROW_VARIANTS}>
          <path d="M2 13h10"/>
          <path d="m5 10-3 3 3 3"/>
        </motion.g>
      </svg>);
}
