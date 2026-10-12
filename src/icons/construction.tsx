'use client';
import * as React from 'react';
import { motion, useAnimation, type Variants, type Transition } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';


export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <motion.pattern animate={controls} height="14" id="stripes" initial="normal" patternUnits="userSpaceOnUse" variants={{
        normal: {
            x: 0,
        },
        animate: {
            x: [0, 6],
            transition: {
                duration: 1,
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
            },
        },
    }} width="6">
            <path d="M-4 -2 L14 30" stroke="currentColor" strokeWidth="2"/>
          </motion.pattern>
        </defs>
        <rect fill="url(#stripes)" height="8" rx="1" width="20" x="2" y="6"/>
        <path d="M17 14v7"/>
        <path d="M7 14v7"/>
        <path d="M17 3v3"/>
        <path d="M7 3v3"/>
      </svg>);
}
