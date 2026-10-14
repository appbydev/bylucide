'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const ARROW_VARIANTS: Variants = {
    normal: { y: -1 },
    animate: {
        y: 0,
        transition: {
            type: "spring",
            velocity: 0,
            stiffness: 200,
            damping: 10,
            mass: 1,
        },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <rect height="8" rx="2" width="20" x="2" y="14"/>
        <path d="M6 18h.01"/>
        <path d="M10 18h.01"/>
        <motion.g animate={controls} variants={ARROW_VARIANTS}>
          <path d="M12 2v8"/>
          <path d="m16 6-4 4-4-4"/>
        </motion.g>
      </svg>);
}
