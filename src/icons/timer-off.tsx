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
        path4: {},
        path5: {},
    } satisfies Record<string, Variants>,
    off: {
        path1: {},
        path2: {},
        path3: {},
        path4: {
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
        path5: {},
    } satisfies Record<string, Variants>,
} as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 useSequenceDriver(register, ['animate'], 'initial', controls);
 return (<motion.svg  style={{ color }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" variants={(animations.default as Record<string, Variants>).group} initial="initial" animate={controls} >
      <motion.path d="M10 2h4" variants={(animations.default as Record<string, Variants>).path1} initial="initial" animate={controls}/>
      <motion.path d="M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7" variants={(animations.default as Record<string, Variants>).path2} initial="initial" animate={controls}/>
      <motion.path d="M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2" variants={(animations.default as Record<string, Variants>).path3} initial="initial" animate={controls}/>
      <motion.path d="m2 2 20 20" variants={(animations.default as Record<string, Variants>).path4} initial="initial" animate={controls}/>
      <motion.path d="M12 12v-2" variants={(animations.default as Record<string, Variants>).path5} initial="initial" animate={controls}/>
    </motion.svg>);
}
