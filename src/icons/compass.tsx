'use client';
import { motion, useAnimation } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';


export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10"/>
          <motion.polygon animate={controls} points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" transition={{
        type: "spring",
        stiffness: 120,
        damping: 15,
    }} variants={{
        normal: {
            rotate: 0,
        },
        animate: {
            rotate: 360,
        },
    }}/>
        </svg>);
}
