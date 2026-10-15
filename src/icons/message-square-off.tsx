'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import { useSequenceDriver, type IconSvgProps } from '../icon-runtime';

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
    } satisfies Record<string, Variants>,
    off: {
        path1: {},
        path2: {
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
        path3: {},
    } satisfies Record<string, Variants>,
} as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 useSequenceDriver(register, ['animate'], 'initial', controls);
 return (<motion.svg  style={{ color }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" variants={(animations.default as Record<string, Variants>).group} initial="initial" animate={controls} >
      <motion.path d="M21 15V5a2 2 0 0 0-2-2H9" variants={(animations.default as Record<string, Variants>).path1} initial="initial" animate={controls}/>
      <motion.path d="m2 2 20 20" variants={(animations.default as Record<string, Variants>).path2} initial="initial" animate={controls}/>
      <motion.path d="M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10" variants={(animations.default as Record<string, Variants>).path3} initial="initial" animate={controls}/>
    </motion.svg>);
}
