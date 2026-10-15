'use client';
import { useSequenceDriver } from '../icon-runtime';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';

const animations = {
    default: {
        group: {
            initial: {
                rotate: 0,
                transition: { type: 'spring', velocity: 0, stiffness: 150, damping: 25 },
            },
            animate: {
                rotate: -45,
                transition: { type: 'spring', velocity: 0, stiffness: 150, damping: 25 },
            },
        },
        arrowArc: {},
        arrowHead: {},
        keyPart1: {},
        keyPart2: {},
        circle: {},
    } satisfies Record<string, Variants>,
    rotate: {
        group: {
            initial: {
                rotate: 0,
                transition: { type: 'spring', velocity: 0, stiffness: 150, damping: 25 },
            },
            animate: {
                rotate: -360,
                transition: { type: 'spring', velocity: 0, stiffness: 150, damping: 25 },
            },
        },
        arrowArc: {},
        arrowHead: {},
        keyPart1: {},
        keyPart2: {},
        circle: {},
    } satisfies Record<string, Variants>,
} as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 useSequenceDriver(register, ['animate'], 'initial', controls);
 return (<motion.svg  style={{ color }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" variants={(animations.default as Record<string, Variants>).group} initial="initial" animate={controls} >
      <motion.path d="m14.5 9.5 1 1" variants={(animations.default as Record<string, Variants>).keyPart1} initial="initial" animate={controls}/>
      <motion.path d="m15.5 8.5-4 4" variants={(animations.default as Record<string, Variants>).keyPart2} initial="initial" animate={controls}/>
      <motion.path d="M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8" variants={(animations.default as Record<string, Variants>).arrowArc} initial="initial" animate={controls}/>
      <motion.path d="M3 3v5h5" variants={(animations.default as Record<string, Variants>).arrowHead} initial="initial" animate={controls}/>
      <motion.circle cx="10" cy="14" r="2" variants={(animations.default as Record<string, Variants>).circle} initial="initial" animate={controls}/>
    </motion.svg>);
}
