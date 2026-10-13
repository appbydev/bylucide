'use client';
import { motion, useAnimation, type Variants, type Transition } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const DEFAULT_TRANSITION: Transition = {
    type: "spring",
    stiffness: 100,
    damping: 12,
    mass: 0.4,
};
const ROCKING_VARIANTS: Variants = {
    normal: { rotate: 0 },
    animate: {
        rotate: [-5, 5, -5],
        transition: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "mirror" as const,
            duration: 1.2,
            ease: "easeInOut",
        },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<motion.svg animate={controls} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} style={{ color,  originX: "10%", originY: "90%" }} variants={ROCKING_VARIANTS} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <motion.polyline animate={controls} points="3.5 2 6.5 12.5 18 12.5" transition={DEFAULT_TRANSITION}/>
        <motion.line animate={controls} transition={DEFAULT_TRANSITION} x1="9.5" x2="5.5" y1="12.5" y2="20"/>
        <motion.line animate={controls} transition={DEFAULT_TRANSITION} x1="15" x2="18.5" y1="12.5" y2="20"/>
        <motion.path animate={controls} d="M2.75 18a13 13 0 0 0 18.5 0" transition={DEFAULT_TRANSITION}/>
      </motion.svg>);
}
