'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import { useSequenceDriver, type IconSvgProps } from '../icon-runtime';
import { MotionSvgRoot } from '../icon-runtime';

const animations = {
    default: {
        line1: {},
        line2: {},
        line3: {
            initial: {
                pathLength: 1,
            },
            animate: {
                pathLength: [0, 1],
                opacity: [0, 1],
                transition: {
                    duration: 0.6,
                    ease: 'easeInOut',
                    opacity: { duration: 0.1 },
                },
            },
        },
    } satisfies Record<string, Variants>,
    'default-loop': {
        line1: {},
        line2: {},
        line3: {
            initial: {
                pathLength: 1,
            },
            animate: {
                pathLength: [1, 0, 1],
                transition: { duration: 1.2, ease: 'easeInOut' },
            },
        },
    } satisfies Record<string, Variants>,
    'to-not': {
        line1: {},
        line2: {},
        line3: {
            initial: {
                pathLength: 0,
                opacity: 0,
            },
            animate: {
                pathLength: 1,
                opacity: 1,
                transition: {
                    duration: 0.6,
                    ease: 'easeInOut',
                    opacity: { duration: 0.1 },
                },
            },
        },
    } satisfies Record<string, Variants>,
} as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 useSequenceDriver(register, ['animate'], 'initial', controls);
 return (<MotionSvgRoot  style={{ color }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" >
      <motion.line x1="5" x2="19" y1="9" y2="9" variants={(animations.default as Record<string, Variants>).line1} initial="initial" animate={controls}/>
      <motion.line x1="5" x2="19" y1="15" y2="15" variants={(animations.default as Record<string, Variants>).line2} initial="initial" animate={controls}/>
      <motion.line x1="19" x2="5" y1="5" y2="19" variants={(animations.default as Record<string, Variants>).line3} initial="initial" animate={controls}/>
    </MotionSvgRoot>);
}
