'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import { useSequenceDriver, type IconSvgProps } from '../icon-runtime';

const animations = {
    default: {
        circle1: {
            initial: {
                x: 0,
                y: 0,
            },
            animate: {
                x: 6,
                y: 6,
                transition: { type: 'spring', velocity: 0, stiffness: 100, damping: 12 },
            },
        },
        circle2: {
            initial: {
                x: 0,
                y: 0,
            },
            animate: {
                x: -6,
                y: -6,
                transition: { type: 'spring', velocity: 0, stiffness: 100, damping: 12 },
            },
        },
    } satisfies Record<string, Variants>,
} as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 useSequenceDriver(register, ['animate'], 'initial', controls);
 return (<motion.svg  style={{ color }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" >
      <motion.circle cx="9" cy="9" r="7" variants={(animations.default as Record<string, Variants>).circle1} initial="initial" animate={controls}/>
      <motion.circle cx="15" cy="15" r="7" variants={(animations.default as Record<string, Variants>).circle2} initial="initial" animate={controls}/>
    </motion.svg>);
}
