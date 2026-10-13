'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const COLUMNS_VARIANTS: Variants = {
    animate: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};
const COLUMN_VARIANTS: Variants = {
    normal: { opacity: 1 },
    animate: {
        opacity: [1, 0.2, 1],
        transition: {
            duration: 1,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
        },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/>
        <motion.g animate={controls} initial="normal" variants={COLUMNS_VARIANTS}>
          <motion.path d="M8 10v4" variants={COLUMN_VARIANTS}/>
          <motion.path d="M12 10v2" variants={COLUMN_VARIANTS}/>
          <motion.path d="M16 10v6" variants={COLUMN_VARIANTS}/>
        </motion.g>
      </svg>);
}
