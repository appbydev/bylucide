'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import { useSequenceDriver, type IconSvgProps } from '../icon-runtime';

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
                scale: 1,
            },
            animate: {
                scale: [1, 0.7, 1.1, 1],
                transition: {
                    ease: 'easeInOut',
                    duration: 0.8,
                },
            },
        },
    } satisfies Record<string, Variants>,
} as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 useSequenceDriver(register, ['animate'], 'initial', controls);
 return (<motion.svg  style={{ color }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" >
      <motion.g variants={(animations.default as Record<string, Variants>).group} initial="initial" animate={controls}>
        <motion.path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" variants={(animations.default as Record<string, Variants>).path1} initial="initial" animate={controls}/>
        <motion.path d="M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7" variants={(animations.default as Record<string, Variants>).path2} initial="initial" animate={controls}/>
      </motion.g>
    </motion.svg>);
}
