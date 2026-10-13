'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const PLANE_VARIANTS: Variants = {
    normal: {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        rotate: 0,
    },
    animate: {
        x: [-25, 0],
        y: [10, 0],
        opacity: [0, 1],
        scale: [0.8, 1],
        rotate: [-15, 0],
        transition: {
            duration: 1.1,
            ease: [0.25, 1, 0.5, 1],
        },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<motion.svg fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} style={{ color,  overflow: "visible" }} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <path d="M2 22h20"/>
        <motion.path animate={controls} d="M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z" initial="normal" style={{ originX: 0.5, originY: 0.5 }} variants={PLANE_VARIANTS}/>
      </motion.svg>);
}
