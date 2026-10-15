'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import { useSequenceDriver, type IconSvgProps } from '../icon-runtime';

const animations = {
    default: {
        group1: {
            initial: {
                rotate: 0,
            },
            animate: {
                rotate: [0, -26, 0],
                transition: {
                    duration: 0.6,
                    ease: 'easeInOut',
                },
            },
        },
        group2: {
            initial: {
                rotate: 0,
            },
            animate: {
                rotate: [0, 26, 0],
                transition: {
                    duration: 0.6,
                    ease: 'easeInOut',
                },
            },
        },
        path1: {},
        path2: {},
        path3: {},
    } satisfies Record<string, Variants>,
} as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 useSequenceDriver(register, ['animate'], 'initial', controls);
 return (<motion.svg  style={{ color }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" >
      <motion.g variants={(animations.default as Record<string, Variants>).group1} initial="initial" animate={controls}>
        <motion.circle cx="6" cy="6" r="3" variants={(animations.default as Record<string, Variants>).circle1} initial="initial" animate={controls}/>
        <motion.path d="M8.12 8.12 12 12" variants={(animations.default as Record<string, Variants>).path1} initial="initial" animate={controls}/>
        <motion.path d="M14.8 14.8 20 20" variants={(animations.default as Record<string, Variants>).path2} initial="initial" animate={controls}/>
      </motion.g>
      <motion.g variants={(animations.default as Record<string, Variants>).group2} initial="initial" animate={controls}>
        <motion.circle cx="6" cy="18" r="3" variants={(animations.default as Record<string, Variants>).circle2} initial="initial" animate={controls}/>
        <motion.path d="M20 4 8.12 15.88" variants={(animations.default as Record<string, Variants>).path3} initial="initial" animate={controls}/>
      </motion.g>
    </motion.svg>);
}
