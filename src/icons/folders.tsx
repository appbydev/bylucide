'use client';
import { motion, useAnimation } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';


export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <motion.path animate={controls} d="M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z" transition={{
        type: "spring",
        stiffness: 250,
        damping: 25,
    }} variants={{
        normal: {
            translateX: 0,
            translateY: 0,
        },
        animate: {
            translateX: -2,
            translateY: 2,
        },
    }}/>
          <motion.path animate={controls} d="M2 8v11a2 2 0 0 0 2 2h14" transition={{
        type: "spring",
        stiffness: 250,
        damping: 25,
    }} variants={{
        normal: {
            translateX: 0,
            translateY: 0,
            opacity: 1,
            scale: 1,
        },
        animate: {
            translateX: 2,
            translateY: -2,
            opacity: 0,
            scale: 0.9,
        },
    }}/>
        </svg>);
}
