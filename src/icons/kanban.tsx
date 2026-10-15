'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import { useSequenceDriver, type IconSvgProps } from '../icon-runtime';

const animations = {
    default: {
        line1: {
            initial: {
                y2: 19,
            },
            animate: {
                y2: [19, 11, 16, 19],
                transition: { duration: 0.6, ease: 'linear' },
            },
        },
        line2: {
            initial: {
                y2: 11,
            },
            animate: {
                y2: [11, 16, 19, 11],
                transition: { duration: 0.6, ease: 'linear' },
            },
        },
        line3: {
            initial: {
                y2: 16,
            },
            animate: {
                y2: [16, 19, 11, 16],
                transition: { duration: 0.6, ease: 'linear' },
            },
        },
    } satisfies Record<string, Variants>,
} as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 useSequenceDriver(register, ['animate'], 'initial', controls);
 return (<motion.svg  style={{ color }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" >
      <motion.line x1={18} y1={5} x2={18} y2={19} variants={(animations.default as Record<string, Variants>).line1} initial="initial" animate={controls}/>
      <motion.line x1={12} y1={5} x2={12} y2={11} variants={(animations.default as Record<string, Variants>).line2} initial="initial" animate={controls}/>
      <motion.line x1={6} y1={5} x2={6} y2={16} variants={(animations.default as Record<string, Variants>).line3} initial="initial" animate={controls}/>
    </motion.svg>);
}
