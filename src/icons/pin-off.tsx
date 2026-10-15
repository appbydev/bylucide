'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import { useSequenceDriver, type IconSvgProps } from '../icon-runtime';
import { MotionSvgRoot } from '../icon-runtime';

const animations = {
    default: {
        group: {
            initial: {
                x: 0,
            },
            animate: {
                x: [0, '-7%', '7%', '-7%', '7%', 0],
                transition: { duration: 0.6, ease: 'easeInOut' },
            },
        },
        path1: {},
        path2: {},
        path3: {},
        path4: {},
    } satisfies Record<string, Variants>,
    off: {
        path1: {},
        path2: {},
        path3: {
            initial: {
                opacity: 0,
                pathLength: 0,
            },
            animate: {
                opacity: 1,
                pathLength: 1,
                transition: { duration: 0.6, ease: 'easeInOut' },
            },
        },
        path4: {},
    } satisfies Record<string, Variants>,
} as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 useSequenceDriver(register, ['animate'], 'initial', controls);
 return (<MotionSvgRoot  style={{ color }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" variants={(animations.default as Record<string, Variants>).group} initial="initial" animate={controls} >
      <motion.path d="M12 17v5" variants={(animations.default as Record<string, Variants>).path1} initial="initial" animate={controls}/>
      <motion.path d="M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89" variants={(animations.default as Record<string, Variants>).path2} initial="initial" animate={controls}/>
      <motion.path d="m2 2 20 20" variants={(animations.default as Record<string, Variants>).path3} initial="initial" animate={controls}/>
      <motion.path d="M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11" variants={(animations.default as Record<string, Variants>).path4} initial="initial" animate={controls}/>
    </MotionSvgRoot>);
}
