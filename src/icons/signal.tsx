'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import { useSequenceDriver, type IconSvgProps } from '../icon-runtime';
import { MotionSvgRoot } from '../icon-runtime';
const pathAnimation: Variants = {
    initial: {
        pathLength: 1,
        opacity: 1,
    },
    animate: {
        pathLength: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 0.3,
            ease: 'easeInOut',
        },
    },
};
const animations = {
    default: {
        group: {
            initial: {},
            animate: {
                transition: {
                    staggerChildren: 0.2,
                },
            },
        },
        path1: pathAnimation,
        path2: pathAnimation,
        path3: pathAnimation,
        path4: pathAnimation,
        path5: pathAnimation,
    } satisfies Record<string, Variants>,
} as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 useSequenceDriver(register, ['animate'], 'initial', controls);
 return (<MotionSvgRoot  style={{ color }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" variants={(animations.default as Record<string, Variants>).group} initial="initial" animate={controls} >
      <motion.path d="M2 20h.01" variants={(animations.default as Record<string, Variants>).path1}/>
      <motion.path d="M7 20v-4" variants={(animations.default as Record<string, Variants>).path2}/>
      <motion.path d="M12 20v-8" variants={(animations.default as Record<string, Variants>).path3}/>
      <motion.path d="M17 20V8" variants={(animations.default as Record<string, Variants>).path4}/>
      <motion.path d="M22 20V4" variants={(animations.default as Record<string, Variants>).path5}/>
    </MotionSvgRoot>);
}
