'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const PATH_VARIANTS: Variants = {
    normal: { d: "M5 12h14" },
    animate: {
        d: ["M5 12h14", "M5 12h9", "M5 12h14"],
        transition: {
            duration: 0.4,
        },
    },
};
const SECONDARY_PATH_VARIANTS: Variants = {
    normal: { d: "m12 5 7 7-7 7", translateX: 0 },
    animate: {
        d: "m12 5 7 7-7 7",
        translateX: [0, -3, 0],
        transition: {
            duration: 0.4,
        },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <motion.path animate={controls} d="M5 12h14" variants={PATH_VARIANTS}/>
          <motion.path animate={controls} d="m12 5 7 7-7 7" variants={SECONDARY_PATH_VARIANTS}/>
        </svg>);
}
