'use client';
import * as React from 'react';
import { motion, useAnimation, type Variants, type Transition } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const EV_CHARGER_VARIANT: Variants = {
    normal: { opacity: 1 },
    animate: {
        opacity: [1, 0.4, 1],
        transition: {
            duration: 1,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
        },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5"/>
          <path d="M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16"/>
          <path d="M2 21h13"/>
          <path d="M3 7h11"/>
          <motion.path animate={controls} d="m9 11-2 3h3l-2 3" initial="normal" variants={EV_CHARGER_VARIANT}/>
        </svg>);
}
