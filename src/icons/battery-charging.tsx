'use client';
import { motion, useAnimation } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { SvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';


export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<SvgRoot  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935"/>
        <path d="M22 14v-4"/>
        <path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936"/>
        <motion.path animate={controls} d="m11 7-3 5h4l-3 5" initial="normal" style={{ originX: "50%", originY: "50%" }} variants={{
        normal: { scale: 1, opacity: 1 },
        animate: {
            scale: [1, 1.2, 1],
            opacity: [1, 0.8, 1],
            transition: {
                duration: 0.8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
            },
        },
    }}/>
      </SvgRoot>);
}
