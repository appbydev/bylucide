'use client';
import * as React from 'react';
import { motion, useAnimation, type Variants, type Transition } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useSequenceDriver } from '../icon-runtime';

const FRAME_VARIANTS: Variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 1 },
};
const LINE_VARIANTS: Variants = {
    visible: { pathLength: 1, opacity: 1 },
    hidden: { pathLength: 0, opacity: 0 },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useSequenceDriver(register, ["hidden","visible"], 'visible', controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <motion.path d="M3 7V5a2 2 0 0 1 2-2h2" variants={FRAME_VARIANTS}/>
          <motion.path d="M17 3h2a2 2 0 0 1 2 2v2" variants={FRAME_VARIANTS}/>
          <motion.path d="M21 17v2a2 2 0 0 1-2 2h-2" variants={FRAME_VARIANTS}/>
          <motion.path d="M7 21H5a2 2 0 0 1-2-2v-2" variants={FRAME_VARIANTS}/>
          <motion.path animate={controls} custom={0} d="M7 8h8" initial="visible" variants={LINE_VARIANTS}/>
          <motion.path animate={controls} custom={1} d="M7 12h10" initial="visible" variants={LINE_VARIANTS}/>
          <motion.path animate={controls} custom={2} d="M7 16h6" initial="visible" variants={LINE_VARIANTS}/>
        </svg>);
}
