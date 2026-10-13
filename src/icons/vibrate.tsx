'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const RECT_VARIANTS: Variants = {
    normal: {
        rotate: 0,
    },
    animate: {
        rotate: [0, -5, 5, -5, 5, 0],
        transition: {
            duration: 0.4,
            times: [0, 0.2, 0.4, 0.6, 0.8, 1],
        },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <path d="m2 8 2 2-2 2 2 2-2 2"/>
          <path d="m22 8-2 2 2 2-2 2 2 2"/>
          <motion.rect animate={controls} height="14" rx="1" style={{ transformOrigin: "center" }} variants={RECT_VARIANTS} width="8" x="8" y="5"/>
        </svg>);
}
