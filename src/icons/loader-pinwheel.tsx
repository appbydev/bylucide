'use client';
import { motion, useAnimation, type Variants, type Transition } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const G_VARIANTS: Variants = {
    normal: { rotate: 0 },
    animate: {
        rotate: 360,
        transition: {
            repeat: Number.POSITIVE_INFINITY,
            duration: 1,
            ease: "linear",
        },
    },
};
const DEFAULT_TRANSITION: Transition = {
    type: "spring",
    velocity: 0,
    stiffness: 50,
    damping: 10,
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <motion.g animate={controls} transition={DEFAULT_TRANSITION} variants={G_VARIANTS}>
          <path d="M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0"/>
          <path d="M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6"/>
          <path d="M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6"/>
        </motion.g>
        <circle cx="12" cy="12" r="10"/>
      </svg>);
}
