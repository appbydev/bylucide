'use client';
import { motion, useAnimation, type Variants, type Transition } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { SvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const HAND_TRANSITION: Transition = {
    duration: 0.6,
    ease: [0.4, 0, 0.2, 1],
};
const HAND_VARIANTS: Variants = {
    normal: {
        rotate: 0,
        originX: "0%",
        originY: "100%",
    },
    animate: {
        rotate: 360,
        originX: "0%",
        originY: "100%",
    },
};
const MINUTE_HAND_TRANSITION: Transition = {
    duration: 0.5,
    ease: "easeInOut",
};
const MINUTE_HAND_VARIANTS: Variants = {
    normal: {
        rotate: 0,
        originX: "0%",
        originY: "100%",
    },
    animate: {
        rotate: 45,
        originX: "0%",
        originY: "100%",
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<SvgRoot  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <path d="M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2"/>

          <circle cx="16" cy="16" r="6"/>
          <motion.line animate={controls} initial="normal" transition={HAND_TRANSITION} variants={HAND_VARIANTS} x1="16" x2="16" y1="16" y2="13"/>
          <motion.line animate={controls} initial="normal" transition={MINUTE_HAND_TRANSITION} variants={MINUTE_HAND_VARIANTS} x1="16" x2="18.5" y1="16" y2="16"/>
        </SvgRoot>);
}
