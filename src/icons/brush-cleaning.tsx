'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import { useSequenceDriver, type IconSvgProps } from '../icon-runtime';
import { MotionSvgRoot } from '../icon-runtime';

const animations = {
    default: {
        group: {
            initial: {
                rotate: 0,
                transition: { duration: 0.6, ease: 'easeInOut' },
            },
            animate: {
                rotate: [0, -10, 10, 0],
                transformOrigin: 'top center',
                transition: { duration: 0.6, ease: 'easeInOut' },
            },
        },
        path1: {},
        path2: {},
        path3: {},
        path4: {},
    } satisfies Record<string, Variants>,
} as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 useSequenceDriver(register, ['animate'], 'initial', controls);
 return (<MotionSvgRoot  style={{ color }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" variants={(animations.default as Record<string, Variants>).group} initial="initial" animate={controls} >
      <motion.path d="m16 22-1-4" variants={(animations.default as Record<string, Variants>).path1} initial="initial" animate={controls}/>
      <motion.path d="M19 13.99a1 1 0 0 0 1-1V12a2 2 0 0 0-2-2h-3a1 1 0 0 1-1-1V4a2 2 0 0 0-4 0v5a1 1 0 0 1-1 1H6a2 2 0 0 0-2 2v.99a1 1 0 0 0 1 1" variants={(animations.default as Record<string, Variants>).path2} initial="initial" animate={controls}/>
      <motion.path d="M5 14h14l1.973 6.767A1 1 0 0 1 20 22H4a1 1 0 0 1-.973-1.233z" variants={(animations.default as Record<string, Variants>).path3} initial="initial" animate={controls}/>
      <motion.path d="m8 22 1-4" variants={(animations.default as Record<string, Variants>).path4} initial="initial" animate={controls}/>
    </MotionSvgRoot>);
}
