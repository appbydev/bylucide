'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import { useSequenceDriver, type IconSvgProps } from '../icon-runtime';

const animations = {
    default: {
        rect: {},
        path1: {},
        path2: {
            initial: {
                pathLength: 0,
                opacity: 0,
                scale: 0,
            },
            animate: {
                pathLength: 1,
                opacity: 1,
                scale: [1.1, 1],
                transition: {
                    duration: 0.6,
                    ease: 'easeInOut',
                },
            },
        },
    } satisfies Record<string, Variants>,
    'default-return': {
        rect: {},
        path1: {},
        path2: {
            initial: {
                pathLength: 0,
                pathOffset: 0,
                opacity: 0,
                scale: 0,
            },
            animate: {
                pathLength: [0, 1, 1, 1],
                pathOffset: [0, 0, 0, 1],
                opacity: [0, 1, 1, 0],
                scale: [1.1, 1, 1, 1],
                transition: {
                    duration: 1.8,
                    ease: 'easeInOut',
                    times: [0, 0.3, 0.7, 1],
                },
            },
        },
    } satisfies Record<string, Variants>,
} as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 useSequenceDriver(register, ['animate'], 'initial', controls);
 return (<motion.svg  style={{ color }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" >
      <motion.rect width="8" height="4" x="8" y="2" rx="1" ry="1" variants={(animations.default as Record<string, Variants>).rect} initial="initial" animate={controls}/>
      <motion.path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" variants={(animations.default as Record<string, Variants>).path1} initial="initial" animate={controls}/>
      <motion.path d="m9 14 2 2 4-4" variants={(animations.default as Record<string, Variants>).path2} initial="initial" animate={controls}/>
    </motion.svg>);
}
