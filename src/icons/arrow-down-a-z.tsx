'use client';
import { motion, useAnimation, type Variants, type Transition } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { SvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const SWAP_TRANSITION: Transition = {
    type: "spring",
    velocity: 0,
    stiffness: 240,
    damping: 24,
};
const SWAP_VARIANTS: Variants = {
    normal: {
        translateY: 0,
    },
    animate: (custom: number) => ({
        translateY: custom * 10,
    }),
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<SvgRoot  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <path d="m3 16 4 4 4-4"/>
          <path d="M7 20V4"/>
          <motion.g animate={controls} custom={1} initial="normal" transition={SWAP_TRANSITION} variants={SWAP_VARIANTS}>
            <path d="M20 8h-5"/>
            <path d="M15 10V6.5a2.5 2.5 0 0 1 5 0V10"/>
          </motion.g>
          <motion.path animate={controls} custom={-1} d="M15 14h5l-5 6h5" initial="normal" transition={SWAP_TRANSITION} variants={SWAP_VARIANTS}/>
        </SvgRoot>);
}
