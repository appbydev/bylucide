'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import { useSequenceDriver, type IconSvgProps } from '../icon-runtime';
import { MotionSvgRoot } from '../icon-runtime';

const animations = {
    default: {
        group: {
            initial: {
                rotate: 0,
                transition: { type: 'spring', velocity: 0, stiffness: 100, damping: 12 },
            },
            animate: {
                rotate: 90,
                transition: { type: 'spring', velocity: 0, stiffness: 100, damping: 12 },
            },
        },
        path: {},
    } satisfies Record<string, Variants>,
    x: {
        group: {
            initial: {
                rotate: 0,
                transition: { type: 'spring', velocity: 0, stiffness: 100, damping: 12 },
            },
            animate: {
                rotate: 45,
                transition: { type: 'spring', velocity: 0, stiffness: 100, damping: 12 },
            },
        },
        path: {},
    } satisfies Record<string, Variants>,
} as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 useSequenceDriver(register, ['animate'], 'initial', controls);
 return (<MotionSvgRoot  style={{ color }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" variants={(animations.default as Record<string, Variants>).group} initial="initial" animate={controls} >
      <motion.path d="M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z" variants={(animations.default as Record<string, Variants>).path} initial="initial" animate={controls}/>
    </MotionSvgRoot>);
}
