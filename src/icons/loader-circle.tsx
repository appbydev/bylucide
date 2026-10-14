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
            duration: 0.8,
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
        <motion.path animate={controls} d="M21 12a9 9 0 1 1-6.219-8.56" style={{ transformOrigin: "12px 12px" }} transition={DEFAULT_TRANSITION} variants={G_VARIANTS}/>
      </svg>);
}
