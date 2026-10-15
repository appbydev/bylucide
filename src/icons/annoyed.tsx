'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { MotionSvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';


export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 const faceVariants: Variants = {
    normal: {
        scale: 1,
        transition: { duration: 0.2, ease: "easeOut" },
    },
    animate: {
        scale: 1.05,
        transition: {
            duration: 0.3,
            ease: "easeOut",
        },
    },
};
const mouthVariants: Variants = {
    normal: {
        scaleX: 1,
        y: 0,
        transition: { duration: 0.2, ease: "easeOut" },
    },
    animate: {
        scaleX: 0.8,
        y: 1,
        transition: {
            duration: 0.3,
            ease: "easeOut",
        },
    },
};
const leftEyebrowVariants: Variants = {
    normal: {
        rotate: 0,
        y: 0,
        x: 0,
        transition: { duration: 0.2, ease: "easeOut" },
    },
    animate: {
        rotate: 15,
        y: -1,
        x: -0.5,
        transition: {
            duration: 0.25,
            ease: "easeOut",
        },
    },
};
const rightEyebrowVariants: Variants = {
    normal: {
        rotate: 0,
        y: 0,
        x: 0,
        transition: { duration: 0.2, ease: "easeOut" },
    },
    animate: {
        rotate: 15,
        y: -1,
        x: 0.5,
        transition: {
            duration: 0.25,
            ease: "easeOut",
            delay: 0.05,
        },
    },
};
 useControlsDriver(register, controls);
 return (<MotionSvgRoot  style={{ color }} animate={controls} fill="none" height={size} initial="normal" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} variants={faceVariants} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10"/>
          <motion.path animate={controls} d="M8 15h8" initial="normal" variants={mouthVariants}/>
          <motion.path animate={controls} d="M8 9h2" initial="normal" variants={leftEyebrowVariants}/>
          <motion.path animate={controls} d="M14 9h2" initial="normal" variants={rightEyebrowVariants}/>
        </MotionSvgRoot>);
}
