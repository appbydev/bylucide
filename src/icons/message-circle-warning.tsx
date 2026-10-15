'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import { useSequenceDriver, type IconSvgProps } from '../icon-runtime';
import { MotionSvgRoot } from '../icon-runtime';

const animations = {
    default: {
        group: {
            initial: {
                rotate: 0,
            },
            animate: {
                transformOrigin: 'bottom left',
                rotate: [0, 8, -8, 2, 0],
                transition: {
                    ease: 'easeInOut',
                    duration: 0.8,
                    times: [0, 0.4, 0.6, 0.8, 1],
                },
            },
        },
        path1: {},
        path2: {
            initial: {
                y: 0,
            },
            animate: {
                y: [0, 1, -0.25, 0],
                transition: {
                    ease: 'easeInOut',
                    duration: 0.8,
                    times: [0, 0.4, 0.7, 1],
                },
            },
        },
        path3: {},
    } satisfies Record<string, Variants>,
} as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 useSequenceDriver(register, ['animate'], 'initial', controls);
 return (<MotionSvgRoot  style={{ color }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" >
      <motion.g variants={(animations.default as Record<string, Variants>).group} initial="initial" animate={controls}>
        <motion.path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" variants={(animations.default as Record<string, Variants>).path1} initial="initial" animate={controls}/>
        <motion.path d="M12 8v4" variants={(animations.default as Record<string, Variants>).path2} initial="initial" animate={controls}/>
        <motion.path d="M12 16h.01" variants={(animations.default as Record<string, Variants>).path3} initial="initial" animate={controls}/>
      </motion.g>
    </MotionSvgRoot>);
}
