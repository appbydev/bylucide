'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import { useSequenceDriver, type IconSvgProps } from '../icon-runtime';

const animations = {
    default: {
        rect: {},
        path1: {},
        path2: {
            initial: {
                pathLength: 1,
                opacity: 1,
                scale: 1,
            },
            animate: {
                pathLength: [0, 1],
                opacity: [0, 1],
                scale: [1.1, 1],
                transition: {
                    duration: 0.4,
                    ease: 'easeInOut',
                },
            },
        },
        path3: {
            initial: {
                pathLength: 1,
                opacity: 1,
                scale: 1,
            },
            animate: {
                pathLength: [0, 1],
                opacity: [0, 1],
                scale: [1.1, 1],
                transition: {
                    duration: 0.4,
                    ease: 'easeInOut',
                    delay: 0.2,
                },
            },
        },
        path4: {
            initial: {
                pathLength: 1,
                opacity: 1,
                scale: 1,
            },
            animate: {
                pathLength: [0, 1],
                opacity: [0, 1],
                scale: [1.1, 1],
                transition: {
                    duration: 0.4,
                    ease: 'easeInOut',
                    delay: 0.5,
                },
            },
        },
        path5: {
            initial: {
                pathLength: 1,
                opacity: 1,
                scale: 1,
            },
            animate: {
                pathLength: [0, 1],
                opacity: [0, 1],
                scale: [1.1, 1],
                transition: {
                    duration: 0.4,
                    ease: 'easeInOut',
                    delay: 0.7,
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
      <motion.path d="M8 11h.01" variants={(animations.default as Record<string, Variants>).path2} initial="initial" animate={controls}/>
      <motion.path d="M12 11h4" variants={(animations.default as Record<string, Variants>).path3} initial="initial" animate={controls}/>
      <motion.path d="M8 16h.01" variants={(animations.default as Record<string, Variants>).path4} initial="initial" animate={controls}/>
      <motion.path d="M12 16h4" variants={(animations.default as Record<string, Variants>).path5} initial="initial" animate={controls}/>
    </motion.svg>);
}
