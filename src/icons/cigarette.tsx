'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { MotionSvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const CIGARETTE_VARIANTS: Variants = {
    normal: {
        y: 0,
        opacity: 1,
    },
    animate: (custom: number) => ({
        y: -3,
        opacity: [0, 1, 0],
        transition: {
            repeat: Number.POSITIVE_INFINITY,
            duration: 1.5,
            ease: "easeInOut",
            delay: 0.2 * custom,
        },
    }),
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<MotionSvgRoot fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} style={{ color,  overflow: "visible" }} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <path d="M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14"/>
          <motion.path animate={controls} custom={0.1} d="M18 8c0-2.5-2-2.5-2-5" initial="normal" variants={CIGARETTE_VARIANTS}/>
          <path d="M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/>
          <motion.path animate={controls} custom={0.3} d="M22 8c0-2.5-2-2.5-2-5" initial="normal" variants={CIGARETTE_VARIANTS}/>
          <path d="M7 12v4"/>
        </MotionSvgRoot>);
}
