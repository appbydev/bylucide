'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { SvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const VARIANTS: Variants = {
    normal: { pathLength: 1, opacity: 1, pathOffset: 0 },
    animate: {
        pathLength: [0, 1],
        opacity: [0, 1],
        pathOffset: [1, 0],
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<SvgRoot  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <motion.path animate={controls} d="M6 4v6a6 6 0 0 0 12 0V4" transition={{ duration: 0.3 }} variants={VARIANTS}/>
          <motion.line animate={controls} transition={{
        delay: 0.2,
        duration: 0.4,
    }} variants={VARIANTS} x1="4" x2="20" y1="20" y2="20"/>
        </SvgRoot>);
}
