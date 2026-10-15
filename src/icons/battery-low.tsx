'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { MotionSvgRoot } from '../icon-runtime';
import { useSequenceDriver } from '../icon-runtime';

const LINE_VARIANTS: Variants = {
    initial: { opacity: 1 },
    fadeOut: {
        opacity: 0,
        transition: {
            duration: 0.4,
            ease: "easeInOut",
        },
    },
    fadeIn: (i: number) => ({
        opacity: 1,
        transition: {
            duration: 0.6,
            delay: i * 0.4,
            ease: "easeInOut",
        },
    }),
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useSequenceDriver(register, ["fadeOut","fadeIn"], 'initial', controls);
 return (<MotionSvgRoot  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <rect height="10" rx="2" ry="2" width="16" x="2" y="7"/>
          <line x1="22" x2="22" y1="11" y2="13"/>
          <motion.line animate={controls} custom={0} initial="initial" variants={LINE_VARIANTS} x1="6" x2="6" y1="11" y2="13"/>
        </MotionSvgRoot>);
}
