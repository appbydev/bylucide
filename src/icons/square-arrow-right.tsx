'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { SvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const SQUARE_VARIANTS: Variants = {
    normal: { transition: { duration: 0.4 } },
    animate: { transition: { duration: 0.6, ease: "easeInOut" } },
};
const PATH_VARIANTS: Variants = {
    normal: { d: "M8 12h8", opacity: 1 },
    animate: {
        d: ["M8 12h8", "M8 12h5", "M8 12h8"],
        transition: { duration: 0.4 },
    },
};
const SECOND_PATH_VARIANTS: Variants = {
    normal: { d: "m12 8 4 4-4 4", translateX: 0, opacity: 1 },
    animate: {
        d: "m12 8 4 4-4 4",
        translateX: [0, -3, 0],
        transition: { duration: 0.4 },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<SvgRoot  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <motion.rect animate={controls} height="18" initial="normal" rx="2" variants={SQUARE_VARIANTS} width="18" x="3" y="3"/>
        <motion.path animate={controls} d="M8 12h8" initial="normal" variants={PATH_VARIANTS}/>
        <motion.path animate={controls} d="m12 8 4 4-4 4" initial="normal" variants={SECOND_PATH_VARIANTS}/>
      </SvgRoot>);
}
