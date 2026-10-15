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
        path5: {},
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
        path5: {},
    } satisfies Record<string, Variants>,
} as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 useSequenceDriver(register, ['animate'], 'initial', controls);
 return (<MotionSvgRoot  style={{ color }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" variants={(animations.default as Record<string, Variants>).group} initial="initial" animate={controls} >
      <motion.path d="M16 9a5 5 0 0 1 .95 2.293" variants={(animations.default as Record<string, Variants>).path1} initial="initial" animate={controls}/>
      <motion.path d="M19.364 5.636a9 9 0 0 1 1.889 9.96" variants={(animations.default as Record<string, Variants>).path2} initial="initial" animate={controls}/>
      <motion.path d="m2 2 20 20" variants={(animations.default as Record<string, Variants>).path3} initial="initial" animate={controls}/>
      <motion.path d="m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11" variants={(animations.default as Record<string, Variants>).path4} initial="initial" animate={controls}/>
      <motion.path d="M9.828 4.172A.686.686 0 0 1 11 4.657v.686" variants={(animations.default as Record<string, Variants>).path5} initial="initial" animate={controls}/>
    </MotionSvgRoot>);
}
