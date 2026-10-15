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
        <rect height="14" rx="2" width="20" x="2" y="3"/>
        <path d="M12 17v4"/>
        <path d="M8 21h8"/>
        <motion.path animate={controls} d="m9 10 2 2 4-4" initial="normal" style={{ transformOrigin: "center" }} variants={CHECK_VARIANTS}/>
      </SvgRoot>);
}
