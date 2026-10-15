'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { SvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const LINE_VARIANTS: Variants = {
    normal: {
        rotate: 0,
        y: 0,
        opacity: 1,
    },
    animate: (custom: number) => ({
        rotate: custom === 1 ? 45 : custom === 3 ? -45 : 0,
        y: custom === 1 ? 6 : custom === 3 ? -6 : 0,
        opacity: custom === 2 ? 0 : 1,
        transition: {
            type: "spring",
            velocity: 0,
            stiffness: 260,
            damping: 20,
        },
    }),
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<SvgRoot  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <motion.line animate={controls} custom={1} initial="normal" variants={LINE_VARIANTS} x1="4" x2="20" y1="6" y2="6"/>
          <motion.line animate={controls} custom={2} initial="normal" variants={LINE_VARIANTS} x1="4" x2="20" y1="12" y2="12"/>
          <motion.line animate={controls} custom={3} initial="normal" variants={LINE_VARIANTS} x1="4" x2="20" y1="18" y2="18"/>
        </SvgRoot>);
}
