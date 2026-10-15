'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { SvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const HEAD_VARIANTS: Variants = {
    normal: {
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        transition: {
            type: "spring",
            velocity: 0,
            stiffness: 180,
            damping: 16,
        },
    },
    animate: {
        x: [0, -5, 5, 0],
        rotate: [0, -15, 15, 0],
        transition: {
            duration: 2.4,
            times: [0, 0.33, 0.66, 1],
            ease: "easeInOut",
        },
    },
};
const BODY_VARIANTS: Variants = {
    normal: {
        rotate: 0,
        transition: {
            type: "spring",
            velocity: 0,
            stiffness: 260,
            damping: 16,
        },
    },
    animate: {
        rotate: [0, 5, 5, 5, 3, 0],
        transition: {
            duration: 1.8,
            times: [0, 0.08, 0.3, 0.52, 0.72, 1],
            ease: "easeInOut",
        },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const headControls = useAnimation();
const bodyControls = useAnimation();
 
 useControlsDriver(register, headControls, bodyControls);
 return (<SvgRoot  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <motion.g animate={bodyControls} initial="normal" style={{ transformBox: "view-box", transformOrigin: "12px 21px" }} variants={BODY_VARIANTS}>
            <path d="M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z"/>
            <path d="m14.5 10 1.5 8"/>
            <path d="M7 10h10"/>
            <path d="m8 18 1.5-8"/>
          </motion.g>
          <motion.circle animate={headControls} cx="12" cy="6" initial="normal" r="4" style={{ transformBox: "fill-box", transformOrigin: "center" }} variants={HEAD_VARIANTS}/>
        </SvgRoot>);
}
