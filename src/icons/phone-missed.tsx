'use client';
import * as React from 'react';
import { motion, useAnimation, type Variants, type Transition } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const PHONE_MISSED_VARIANTS: Variants = {
    initial: { scale: 1 },
    animate: {
        scale: [1, 1.05, 1],
        transition: {
            duration: 0.9,
            ease: "easeInOut",
        },
    },
};
const ARROW_VARIANTS: Variants = {
    normal: {
        scale: 1,
    },
    animate: {
        scale: [1, 1.2, 1],
        transition: {
            duration: 0.8,
            ease: "easeInOut",
        },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<motion.svg fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} style={{ color,  overflow: "visible" }} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <motion.g animate={controls} initial={{ y: 0, opacity: 1 }} variants={ARROW_VARIANTS}>
            <path d="m16 2 6 6"/>
            <path d="m22 2-6 6"/>
          </motion.g>
          <motion.path animate={controls} d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" initial="initial" variants={PHONE_MISSED_VARIANTS}/>
        </motion.svg>);
}
