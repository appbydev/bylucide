'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const ICON_VARIANTS: Variants = {
    normal: {
        scale: 1,
        rotate: 0,
    },
    animate: {
        scale: 1.05,
        rotate: [0, -7, 7, 0],
        transition: {
            rotate: {
                duration: 0.5,
                ease: "easeInOut",
            },
            scale: {
                type: "spring",
                velocity: 0,
                stiffness: 400,
                damping: 10,
            },
        },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<motion.svg  style={{ color }} animate={controls} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} variants={ICON_VARIANTS} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
      </motion.svg>);
}
