'use client';
import * as React from 'react';
import { motion, useAnimation, type Variants, type Transition } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const LINE_VARIANTS: Variants = {
    visible: { pathLength: 1, opacity: 1 },
    hidden: { pathLength: 0, opacity: 0 },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <motion.path animate={controls} custom={1} d="M13 17V9" initial="visible" variants={LINE_VARIANTS}/>
        <motion.path animate={controls} custom={2} d="M18 17v-3" initial="visible" variants={LINE_VARIANTS}/>
        <path d="M3 3v16a2 2 0 0 0 2 2h16"/>
        <motion.path animate={controls} custom={0} d="M8 17V5" initial="visible" variants={LINE_VARIANTS}/>
      </svg>);
}
