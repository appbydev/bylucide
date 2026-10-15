'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { SvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const WIND_VARIANTS: Variants = {
    animate: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};
const WIND_CHILD_VARIANTS: Variants = {
    normal: {
        opacity: 1,
    },
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
 return (<SvgRoot  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/>
        <motion.g animate={controls} initial="normal" variants={WIND_VARIANTS}>
          <motion.path d="m9.2 22 3-7" variants={WIND_CHILD_VARIANTS}/>
          <motion.path d="m9 13-3 7" variants={WIND_CHILD_VARIANTS}/>
          <motion.path d="m17 13-3 7" variants={WIND_CHILD_VARIANTS}/>
        </motion.g>
      </SvgRoot>);
}
