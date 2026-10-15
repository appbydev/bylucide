'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { SvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const RECT_VARIANTS: Variants = {
    normal: { scale: 1 },
    animate: {
        scale: [1, 0.8, 1],
        transition: { duration: 0.4 },
    },
};
const PATH_VARIANTS: Variants = {
    normal: { scale: 1 },
    animate: {
        scale: [1, 0.9, 1],
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<SvgRoot  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <motion.path animate={controls} d="M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" transition={{
        delay: 0.3,
        duration: 0.4,
    }} variants={PATH_VARIANTS}/>
          <motion.path animate={controls} d="M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" transition={{
        delay: 0.2,
        duration: 0.2,
    }} variants={PATH_VARIANTS}/>
          <motion.rect animate={controls} height="8" rx="2" variants={RECT_VARIANTS} width="8" x="14" y="14"/>
        </SvgRoot>);
}
