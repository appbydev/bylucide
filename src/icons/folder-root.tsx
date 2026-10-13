'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const ROOT_VARIANTS: Variants = {
    normal: { opacity: 0.6 },
    animate: {
        opacity: [0.6, 1, 0.3, 0.6],
        transition: {
            duration: 0.8,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
        },
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/>
          <motion.circle animate={controls} cx="12" cy="13" initial="normal" r="2" variants={ROOT_VARIANTS}/>
          <motion.path animate={controls} d="M12 15v5" initial="normal" variants={ROOT_VARIANTS}/>
        </svg>);
}
