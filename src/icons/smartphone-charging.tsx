'use client';
import { motion, useAnimation } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';


export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <rect height="20" rx="2" ry="2" width="14" x="5" y="2"/>
        <motion.path animate={controls} d="M12.667 8 10 12h4l-2.667 4" initial="normal" variants={{
        normal: { opacity: 1 },
        animate: {
            opacity: [1, 0.4, 1],
            transition: {
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
            },
        },
    }}/>
      </svg>);
}
