'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import { useSequenceDriver, type IconSvgProps } from '../icon-runtime';

const animations = {
    default: {
        group: {
            initial: {
                rotate: 0,
            },
            animate: {
                rotate: [0, 20, -10, 10, -5, 3, 0],
                transformOrigin: 'top center',
                transition: { duration: 0.9, ease: 'easeInOut' },
            },
        },
        path1: {
            initial: {
                x: 0,
            },
            animate: {
                x: [0, -6, 5, -5, 4, -3, 2, 0],
                transition: { duration: 1.1, ease: 'easeInOut' },
            },
        },
        path2: {
            initial: {
                y: 0,
                scale: 1,
            },
            animate: {
                y: [0, 1, -0.5, 0.5, -0.25, 0],
                scale: [1, 0.8, 0.9, 1, 1],
                transition: { duration: 0.8, ease: 'easeInOut' },
            },
        },
        path3: {
            initial: {
                y: 0,
                scale: 1,
            },
            animate: {
                y: [0, -0.5, 1, -0.5, 0.25, 0],
                scale: [1, 0.8, 0.9, 1, 1],
                transition: { duration: 0.8, ease: 'easeInOut' },
            },
        },
        path4: {},
    } satisfies Record<string, Variants>,
} as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 useSequenceDriver(register, ['animate'], 'initial', controls);
 return (<motion.svg  style={{ color }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" variants={(animations.default as Record<string, Variants>).group} initial="initial" animate={controls} >
      <motion.path d="M10.268 21a2 2 0 0 0 3.464 0" variants={(animations.default as Record<string, Variants>).path1} initial="initial" animate={controls}/>
      <motion.path d="M22 8c0-2.3-.8-4.3-2-6" variants={(animations.default as Record<string, Variants>).path2} initial="initial" animate={controls}/>
      <motion.path d="M4 2C2.8 3.7 2 5.7 2 8" variants={(animations.default as Record<string, Variants>).path3} initial="initial" animate={controls}/>
      <motion.path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" variants={(animations.default as Record<string, Variants>).path4} initial="initial" animate={controls}/>
    </motion.svg>);
}
