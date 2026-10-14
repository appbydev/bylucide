'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const CARD_VARIANTS: Variants = {
    normal: {
        x: 0,
        transition: {
            type: "spring",
            velocity: 0,
            stiffness: 280,
            damping: 18,
        },
    },
    animate: {
        x: [0, -4, 1.5, 0],
        transition: {
            duration: 0.7,
            times: [0, 0.4, 0.75, 1],
            ease: "easeInOut",
        },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<svg  style={{ color }} className="overflow-visible" fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <motion.g animate={controls} initial="normal" variants={CARD_VARIANTS}>
            <rect height="14" rx="2" width="20" x="2" y="5"/>
            <line x1="2" x2="22" y1="10" y2="10"/>
          </motion.g>
        </svg>);
}
