'use client';
import { motion, useAnimation } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';


export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <motion.path animate={controls} d="M17 12H7" variants={{
        normal: { translateX: 0 },
        animate: {
            translateX: [0, 3, -3, 2, -2, 0],
            transition: {
                ease: "linear",
                translateX: {
                    duration: 1,
                },
            },
        },
    }}/>
          <path d="M19 18H5"/>
          <path d="M21 6H3"/>
        </svg>);
}
