'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const SVG_VARIANTS: Variants = {
    normal: {
        y: 0,
    },
    animate: {
        y: [0, -5, -3],
        transition: {
            duration: 0.5,
            times: [0, 0.6, 1],
        },
    },
};
const CHECK_VARIANTS: Variants = {
    normal: {
        opacity: 1,
    },
    animate: {
        opacity: [0, 1],
        pathLength: [0, 1],
        transition: {
            delay: 0.3,
            duration: 0.3,
            opacity: { duration: 0.1, delay: 0.3 },
        },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<motion.svg  style={{ color }} animate={controls} fill="none" height={size} initial="normal" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} variants={SVG_VARIANTS} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>
        <motion.path animate={controls} d="m9 10 2 2 4-4" initial="normal" variants={CHECK_VARIANTS}/>
      </motion.svg>);
}
