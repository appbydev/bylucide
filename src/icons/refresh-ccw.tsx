'use client';
import { motion, useAnimation } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';


export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <motion.g animate={controls} transition={{ type: "spring", velocity: 0, stiffness: 250, damping: 25 }} variants={{
        normal: { rotate: "0deg" },
        animate: { rotate: "-50deg" },
    }}>
            <path d="M3 2v6h6"/>
            <path d="M21 12A9 9 0 0 0 6 5.3L3 8"/>
            <path d="M21 22v-6h-6"/>
            <path d="M3 12a9 9 0 0 0 15 6.7l3-2.7"/>
          </motion.g>
        </svg>);
}
