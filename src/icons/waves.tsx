'use client';
import { motion, useAnimation } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';


export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <motion.path animate={controls} d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1" initial={{ pathLength: 1 }} variants={{
        normal: { pathLength: 1 },
        animate: {
            pathLength: [0, 1],
            transition: { duration: 0.4, ease: "linear" },
        },
    }}/>
          <motion.path animate={controls} d="M2 12c.6.5 1.2 1 2.5 1c2.5 0 2.5-2 5-2c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1" initial={{ pathLength: 1 }} variants={{
        normal: { pathLength: 1 },
        animate: {
            pathLength: [0, 1],
            transition: { duration: 0.4, ease: "linear" },
        },
    }}/>
          <motion.path animate={controls} d="M2 18c.6.5 1.2 1 2.5 1c2.5 0 2.5-2 5-2c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1" initial={{ pathLength: 1 }} variants={{
        normal: { pathLength: 1 },
        animate: {
            pathLength: [0, 1],
            transition: { duration: 0.4, ease: "linear" },
        },
    }}/>
        </svg>);
}
