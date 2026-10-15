'use client';
import { motion, useAnimation } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { SvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';


export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<SvgRoot  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <path d="M2 10v3"/>
          <motion.path animate={controls} d="M6 6v11" variants={{
        normal: { d: "M6 6v11" },
        animate: {
            d: ["M6 6v11", "M6 10v3", "M6 6v11"],
            transition: {
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
            },
        },
    }}/>
          <motion.path animate={controls} d="M10 3v18" variants={{
        normal: { d: "M10 3v18" },
        animate: {
            d: ["M10 3v18", "M10 9v5", "M10 3v18"],
            transition: {
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
            },
        },
    }}/>
          <motion.path animate={controls} d="M14 8v7" variants={{
        normal: { d: "M14 8v7" },
        animate: {
            d: ["M14 8v7", "M14 6v11", "M14 8v7"],
            transition: {
                duration: 0.8,
                repeat: Number.POSITIVE_INFINITY,
            },
        },
    }}/>
          <motion.path animate={controls} d="M18 5v13" variants={{
        normal: { d: "M18 5v13" },
        animate: {
            d: ["M18 5v13", "M18 7v9", "M18 5v13"],
            transition: {
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
            },
        },
    }}/>
          <path d="M22 10v3"/>
        </SvgRoot>);
}
