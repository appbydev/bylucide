'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import { useSequenceDriver, type IconSvgProps } from '../icon-runtime';
import { MotionSvgRoot } from '../icon-runtime';

const animations = {
    default: {
        path1: {
            initial: {
                x: 0,
                y: 0,
                pathLength: 1,
                pathOffset: 0,
            },
            animate: {
                pathLength: [1, 0.8, 1],
                pathOffset: [0, 0.1, 0],
                x: [0, 3, 0],
                y: [0, -3, 0],
                transition: {
                    duration: 1,
                    ease: 'easeInOut',
                },
            },
        },
        path2: {
            initial: {
                x: 0,
                y: 0,
                pathLength: 1,
                pathOffset: 0,
            },
            animate: {
                pathLength: [1, 0.8, 1],
                pathOffset: [0, 0.1, 0],
                x: [0, -3, 0],
                y: [0, 3, 0],
                transition: {
                    duration: 1,
                    ease: 'easeInOut',
                },
            },
        },
    } satisfies Record<string, Variants>,
} as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 useSequenceDriver(register, ['animate'], 'initial', controls);
 return (<MotionSvgRoot  style={{ color }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" initial="initial" animate={controls} >
      <motion.path d="M6 2v14a2 2 0 0 0 2 2h14" variants={(animations.default as Record<string, Variants>).path1} initial="initial" animate={controls}/>
      <motion.path d="M18 22V8a2 2 0 0 0-2-2H2" variants={(animations.default as Record<string, Variants>).path2} initial="initial" animate={controls}/>
    </MotionSvgRoot>);
}
