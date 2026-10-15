'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import { useSequenceDriver, type IconSvgProps } from '../icon-runtime';
import { MotionSvgRoot } from '../icon-runtime';

const animations = {
    default: {
        path1: {
            initial: {
                rotate: 0,
                transition: { duration: 0 },
            },
            animate: {
                rotate: [0, -30, 400, 360],
                transition: {
                    duration: 1.2,
                    times: [0, 0.25, 0.75, 1],
                    ease: ['easeInOut', 'easeInOut', 'easeInOut'],
                },
            },
        },
        group: {
            initial: {
                scale: 1,
                rotate: 0,
                y: 0,
                x: 0,
            },
            animate: {
                scale: [1, 0, 0, 1],
                rotate: [0, 90, 90, 0],
                y: [0, 6, 10, 0],
                x: [0, -10, -6, 0],
                transition: {
                    duration: 1.2,
                    ease: 'easeInOut',
                    times: [0, 0.25, 0.65, 1],
                },
            },
        },
        path2: {},
        path3: {},
    } satisfies Record<string, Variants>,
} as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 useSequenceDriver(register, ['animate'], 'initial', controls);
 return (<MotionSvgRoot  style={{ color }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" initial="initial" animate={controls} >
      <motion.path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" variants={(animations.default as Record<string, Variants>).path1} initial="initial" animate={controls}/>
      <motion.g variants={(animations.default as Record<string, Variants>).group} initial="initial" animate={controls}>
        <motion.path d="M18 5h4" variants={(animations.default as Record<string, Variants>).path2} initial="initial" animate={controls}/>
        <motion.path d="M20 3v4" variants={(animations.default as Record<string, Variants>).path3} initial="initial" animate={controls}/>
      </motion.g>
    </MotionSvgRoot>);
}
