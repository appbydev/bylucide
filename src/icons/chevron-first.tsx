'use client';
import * as React from 'react';
import { motion, useAnimation, type Variants, type Transition } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';


export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <motion.path animate={controls} d="m17 18-6-6 6-6" initial="normal" variants={{
        normal: {
            translateX: 0,
            transition: { duration: 0.3, ease: "easeOut" },
        },
        animate: {
            translateX: [-2, 1, -1, 0],
            transition: {
                duration: 0.6,
                ease: "easeInOut",
                times: [0, 0.3, 0.7, 1],
            },
        },
    }}/>

        <path d="M7 6v12"/>
      </svg>);
}
