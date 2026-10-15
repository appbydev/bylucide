'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { MotionSvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const PLANE_LANDING_VARIANTS: Variants = {
    normal: {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        rotate: 0,
    },
    animate: {
        x: [-38, 1, 0],
        y: [-20, 1, 0],
        opacity: [0, 1, 1],
        scale: [0.5, 1],
        rotate: [16, -5, 0],
        transition: {
            duration: 1.1,
            ease: [0.25, 1, 0.5, 1],
            times: [0, 0.65, 1],
        },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<MotionSvgRoot  style={{ color }} className="overflow-visible" fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <path d="M2 22h20"/>
        <motion.path animate={controls} d="M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z" initial="normal" style={{ originX: 0.5, originY: 0.5 }} variants={PLANE_LANDING_VARIANTS}/>
      </MotionSvgRoot>);
}
