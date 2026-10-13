'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const STRETCH_VARIANTS: Variants = {
    normal: { scaleX: 1, x: 0, opacity: 1 },
    animate: {
        scaleX: [1, 1.15, 1],
        x: [0, 2, 0],
        transition: {
            duration: 0.45,
            ease: "easeInOut",
        },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<motion.svg  style={{ color }} animate={controls} fill="none" height={size} initial="normal" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} variants={STRETCH_VARIANTS} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <path d="m15 14 5-5-5-5"/>
        <path d="M4 20v-7a4 4 0 0 1 4-4h12"/>
      </motion.svg>);
}
