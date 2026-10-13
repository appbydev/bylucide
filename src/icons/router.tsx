'use client';
import * as React from 'react';
import { motion, useAnimation, type Variants, type Transition } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useSequenceDriver } from '../icon-runtime';

const PATH_VARIANTS: Variants = {
    normal: {
        opacity: 1,
        transition: {
            duration: 0.4,
        },
    },
    fadeOut: {
        opacity: 0,
        transition: { duration: 0.3 },
    },
    fadeIn: (i: number) => ({
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: i * 0.1,
        },
    }),
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const pathControls = useAnimation();
 
 useSequenceDriver(register, ["fadeOut","fadeIn"], 'normal', pathControls);
 return (<motion.svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <rect height="8" rx="2" width="20" x="2" y="14"/>
          <path d="M6.01 18H6"/>
          <path d="M10.01 18H10"/>
          <path d="M15 10v4"/>
          <motion.path animate={pathControls} custom={1} d="M17.84 7.17a4 4 0 0 0-5.66 0" initial={{ opacity: 1 }} variants={PATH_VARIANTS}/>
          <motion.path animate={pathControls} custom={2} d="M20.66 4.34a8 8 0 0 0-11.31 0" initial={{ opacity: 1 }} variants={PATH_VARIANTS}/>
        </motion.svg>);
}
