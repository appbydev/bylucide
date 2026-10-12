'use client';
import * as React from 'react';
import { motion, useAnimation, type Variants, type Transition } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const DOT_VARIANTS: Variants = {
    visible: (i: number) => ({
        opacity: 1,
        transition: {
            delay: i * 0.15,
            duration: 0.3,
        },
    }),
    hidden: {
        opacity: 0,
        transition: {
            duration: 0.2,
        },
    },
    default: { opacity: 1 },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<motion.svg  style={{ color }} animate={controls} fill="none" height={size} initial="default" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <motion.circle custom={0} cx="7.5" cy="7.5" fill="currentColor" r=".5" variants={DOT_VARIANTS}/>
        <motion.circle custom={1} cx="18.5" cy="5.5" fill="currentColor" r=".5" variants={DOT_VARIANTS}/>
        <motion.circle custom={2} cx="11.5" cy="11.5" fill="currentColor" r=".5" variants={DOT_VARIANTS}/>
        <motion.circle custom={3} cx="7.5" cy="16.5" fill="currentColor" r=".5" variants={DOT_VARIANTS}/>
        <motion.circle custom={4} cx="17.5" cy="14.5" fill="currentColor" r=".5" variants={DOT_VARIANTS}/>
        <path d="M3 3v16a2 2 0 0 0 2 2h16" strokeWidth="2"/>
      </motion.svg>);
}
