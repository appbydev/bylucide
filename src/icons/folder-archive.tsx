'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const BLINK_VARIANTS: Variants = {
    normal: { opacity: 1 },
    animate: {
        opacity: [1, 0, 1],
        transition: { duration: 0.6, ease: "easeInOut" },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <path d="M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1"/>
        <motion.g animate={controls} initial="normal" variants={BLINK_VARIANTS}>
          <circle cx="15" cy="19" r="2"/>
          <path d="M15 11v-1"/>
          <path d="M15 17v-2"/>
        </motion.g>
      </svg>);
}
