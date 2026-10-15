'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import { useSequenceDriver, type IconSvgProps } from '../icon-runtime';

const animations = {
    default: {
        group: {
            initial: {
                x: 0,
                y: 0,
                transition: { duration: 0.4, ease: 'easeInOut' },
            },
            animate: {
                x: 2,
                y: 2,
                transition: { duration: 0.4, ease: 'easeInOut' },
            },
        },
        path1: {},
        path2: {},
        path3: {},
    } satisfies Record<string, Variants>,
    'default-loop': {
        group: {
            initial: {
                x: 0,
                y: 0,
            },
            animate: {
                x: [0, 2, 0],
                y: [0, 2, 0],
                transition: { duration: 0.8, ease: 'easeInOut' },
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
      <motion.g variants={(animations.default as Record<string, Variants>).group} initial="initial" animate={controls}>
        <motion.path d="m21 21-9-9" variants={(animations.default as Record<string, Variants>).path1} initial="initial" animate={controls}/>
        <motion.path d="M21 15v6h-6" variants={(animations.default as Record<string, Variants>).path2} initial="initial" animate={controls}/>
      </motion.g>
      <motion.path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" variants={(animations.default as Record<string, Variants>).path3} initial="initial" animate={controls}/>
    </motion.svg>);
}
