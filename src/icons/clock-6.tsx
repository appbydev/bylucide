'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import { useSequenceDriver, type IconSvgProps } from '../icon-runtime';
import { MotionSvgRoot } from '../icon-runtime';

const animations = {
    default: {
        circle: {},
        line1: {
            initial: {
                rotate: 0,
                transition: { ease: 'easeInOut', duration: 0.6 },
            },
            animate: {
                transformOrigin: 'top left',
                rotate: [0, 20, 0],
                transition: { ease: 'easeInOut', duration: 0.6 },
            },
        },
        line2: {
            initial: {
                rotate: 0,
                transition: { ease: 'easeInOut', duration: 0.6 },
            },
            animate: {
                transformOrigin: 'bottom left',
                rotate: 360,
                transition: { ease: 'easeInOut', duration: 0.6 },
            },
        },
    } satisfies Record<string, Variants>,
} as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 useSequenceDriver(register, ['animate'], 'initial', controls);
 return (<MotionSvgRoot  style={{ color }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" >
      <motion.circle cx={12} cy={12} r={10} variants={(animations.default as Record<string, Variants>).circle} initial="initial" animate={controls}/>
      <motion.line x1={12} y1={16.5} x2={12} y2={12} variants={(animations.default as Record<string, Variants>).line1} initial="initial" animate={controls}/>
      <motion.line x1={12} y1={6} x2={12} y2={12} variants={(animations.default as Record<string, Variants>).line2} initial="initial" animate={controls}/>
    </MotionSvgRoot>);
}
