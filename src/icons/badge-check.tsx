'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import { useSequenceDriver, type IconSvgProps } from '../icon-runtime';

const animations = {
    default: {
        path1: {
            initial: { scale: 1 },
            animate: {
                scale: [1, 0.9, 1],
                transition: {
                    duration: 1.2,
                    ease: 'easeInOut',
                },
            },
        },
        path2: {
            initial: { pathLength: 1, opacity: 1 },
            animate: {
                pathLength: [1, 0, 1],
                transition: {
                    duration: 1.2,
                    ease: 'easeInOut',
                    opacity: { duration: 0.01 },
                },
            },
        },
    } satisfies Record<string, Variants>,
    check: {
        path2: {
            initial: { pathLength: 1, opacity: 1 },
            animate: {
                pathLength: [0, 1],
                opacity: [0, 1],
                transition: {
                    duration: 0.6,
                    ease: 'easeInOut',
                    opacity: { duration: 0.01 },
                },
            },
        },
    } satisfies Record<string, Variants>,
} as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 useSequenceDriver(register, ['animate'], 'initial', controls);
 return (<motion.svg  style={{ color }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" >
      <motion.path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" variants={(animations.default as Record<string, Variants>).path1} initial="initial" animate={controls}/>
      <motion.path d="m9 12 2 2 4-4" variants={(animations.default as Record<string, Variants>).path2} initial="initial" animate={controls}/>
    </motion.svg>);
}
