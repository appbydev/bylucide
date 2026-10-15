'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { SvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const CHECK_VARIANTS: Variants = {
    normal: {
        pathLength: 1,
        opacity: 1,
        transition: {
            duration: 0.3,
        },
    },
    animate: {
        pathLength: [0, 1],
        opacity: [0, 1],
        transition: {
            pathLength: { duration: 0.4, ease: "easeInOut" },
            opacity: { duration: 0.4, ease: "easeInOut" },
        },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<SvgRoot  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <motion.path animate={controls} d="M16 11L18 13L22 9" initial="normal" style={{ transformOrigin: "center" }} variants={CHECK_VARIANTS}/>
        </SvgRoot>);
}
