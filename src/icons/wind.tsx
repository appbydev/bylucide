'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { SvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const PATH_VARIANTS: Variants = {
    normal: (custom: number) => ({
        pathLength: 1,
        opacity: 1,
        pathOffset: 0,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
            delay: custom,
        },
    }),
    animate: (custom: number) => ({
        pathLength: [0, 1],
        opacity: [0, 1],
        pathOffset: [1, 0],
        transition: {
            duration: 0.5,
            ease: "easeInOut",
            delay: custom,
        },
    }),
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<SvgRoot  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <motion.path animate={controls} custom={0.2} d="M12.8 19.6A2 2 0 1 0 14 16H2" initial="normal" variants={PATH_VARIANTS}/>
          <motion.path animate={controls} custom={0} d="M17.5 8a2.5 2.5 0 1 1 2 4H2" initial="normal" variants={PATH_VARIANTS}/>
          <motion.path animate={controls} custom={0.4} d="M9.8 4.4A2 2 0 1 1 11 8H2" initial="normal" variants={PATH_VARIANTS}/>
        </SvgRoot>);
}
