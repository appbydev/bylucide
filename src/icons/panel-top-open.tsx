'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import { useSequenceDriver, type IconSvgProps } from '../icon-runtime';

const animations = {
    default: {
        rect: {},
        line: {
            initial: { x1: 3, y1: 9, x2: 21, y2: 9 },
            animate: {
                x1: 3,
                y1: 11,
                x2: 21,
                y2: 11,
                transition: { type: 'spring', velocity: 0, damping: 18, stiffness: 200 },
            },
        },
        arrow: {
            initial: { y: 0 },
            animate: {
                y: 2,
                transition: { type: 'spring', velocity: 0, damping: 18, stiffness: 200 },
            },
        },
    } satisfies Record<string, Variants>,
} as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 useSequenceDriver(register, ['animate'], 'initial', controls);
 return (<motion.svg  style={{ color }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" >
      <motion.rect width={18} height={18} x={3} y={3} rx={2} ry={2} variants={(animations.default as Record<string, Variants>).rect} initial="initial" animate={controls}/>
      <motion.line x1={3} y1={9} x2={21} y2={9} variants={(animations.default as Record<string, Variants>).line} initial="initial" animate={controls}/>
      <motion.path d="m15 14-3 3-3-3" variants={(animations.default as Record<string, Variants>).arrow} initial="initial" animate={controls}/>
    </motion.svg>);
}
