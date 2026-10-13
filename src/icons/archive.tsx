'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const RECT_VARIANTS: Variants = {
    normal: {
        translateY: 0,
        transition: {
            duration: 0.2,
            type: "spring",
            stiffness: 200,
            damping: 25,
        },
    },
    animate: {
        translateY: -1.5,
        transition: {
            duration: 0.2,
            type: "spring",
            stiffness: 200,
            damping: 25,
        },
    },
};
const PATH_VARIANTS: Variants = {
    normal: { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" },
    animate: { d: "M4 11v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V11" },
};
const SECONDARY_PATH_VARIANTS: Variants = {
    normal: { d: "M10 12h4" },
    animate: { d: "M10 15h4" },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <motion.rect animate={controls} height="5" initial="normal" rx="1" variants={RECT_VARIANTS} width="20" x="2" y="3"/>
          <motion.path animate={controls} d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" variants={PATH_VARIANTS}/>
          <motion.path animate={controls} d="M10 12h4" variants={SECONDARY_PATH_VARIANTS}/>
        </svg>);
}
