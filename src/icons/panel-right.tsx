'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import { useSequenceDriver, type IconSvgProps } from '../icon-runtime';
import { MotionSvgRoot } from '../icon-runtime';

const animations = {
    default: {
        rect: {},
        line: {
            initial: { x1: 15, y1: 3, x2: 15, y2: 21 },
            animate: {
                x1: 17,
                y1: 3,
                x2: 17,
                y2: 21,
                transition: { type: 'spring', velocity: 0, damping: 18, stiffness: 200 },
            },
        },
    } satisfies Record<string, Variants>,
} as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 useSequenceDriver(register, ['animate'], 'initial', controls);
 return (<MotionSvgRoot  style={{ color }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" >
      <motion.rect width={18} height={18} x={3} y={3} rx={2} ry={2} variants={(animations.default as Record<string, Variants>).rect} initial="initial" animate={controls}/>
      <motion.line x1={15} y1={3} x2={15} y2={21} variants={(animations.default as Record<string, Variants>).line} initial="initial" animate={controls}/>
    </MotionSvgRoot>);
}
