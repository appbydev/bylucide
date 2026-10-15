'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import { useSequenceDriver, type IconSvgProps } from '../icon-runtime';

const animations = {
    default: {
        rect: {},
        line1: {
            initial: {
                rotate: 0,
                transition: { ease: 'easeInOut', duration: 0.4, delay: 0.1 },
            },
            animate: {
                rotate: 90,
                transition: { ease: 'easeInOut', duration: 0.4, delay: 0.1 },
            },
        },
        line2: {
            initial: {
                rotate: 0,
                transition: { ease: 'easeInOut', duration: 0.4 },
            },
            animate: {
                rotate: 90,
                transition: { ease: 'easeInOut', duration: 0.4 },
            },
        },
    } satisfies Record<string, Variants>,
} as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 useSequenceDriver(register, ['animate'], 'initial', controls);
 return (<motion.svg  style={{ color }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" >
      <motion.rect width={18} height={18} x={3} y={3} rx={2} ry={2} variants={(animations.default as Record<string, Variants>).rect} initial="initial" animate={controls}/>
      <motion.line x1={8} y1={12} x2={16} y2={12} variants={(animations.default as Record<string, Variants>).line1} initial="initial" animate={controls}/>
      <motion.line x1={12} y1={16} x2={12} y2={8} variants={(animations.default as Record<string, Variants>).line2} initial="initial" animate={controls}/>
    </motion.svg>);
}
