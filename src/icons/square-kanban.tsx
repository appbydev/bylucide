'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import { useSequenceDriver, type IconSvgProps } from '../icon-runtime';
import { MotionSvgRoot } from '../icon-runtime';

const animations = {
    default: {
        rect: {},
        line1: {
            initial: {
                y2: 16,
            },
            animate: {
                y2: [16, 11, 14, 16],
                transition: { duration: 0.6, ease: 'linear' },
            },
        },
        line2: {
            initial: {
                y2: 11,
            },
            animate: {
                y2: [11, 14, 16, 11],
                transition: { duration: 0.6, ease: 'linear' },
            },
        },
        line3: {
            initial: {
                y2: 14,
            },
            animate: {
                y2: [14, 16, 11, 14],
                transition: { duration: 0.6, ease: 'linear' },
            },
        },
    } satisfies Record<string, Variants>,
} as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 useSequenceDriver(register, ['animate'], 'initial', controls);
 return (<MotionSvgRoot  style={{ color }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" >
      <motion.rect x={3} y={3} width={18} height={18} rx={2} ry={2} variants={(animations.default as Record<string, Variants>).rect} initial="initial" animate={controls}/>
      <motion.line x1={16} y1={7} x2={16} y2={16} variants={(animations.default as Record<string, Variants>).line1} initial="initial" animate={controls}/>
      <motion.line x1={12} y1={7} x2={12} y2={11} variants={(animations.default as Record<string, Variants>).line2} initial="initial" animate={controls}/>
      <motion.line x1={8} y1={7} x2={8} y2={14} variants={(animations.default as Record<string, Variants>).line3} initial="initial" animate={controls}/>
    </MotionSvgRoot>);
}
