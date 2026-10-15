'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import { useSequenceDriver, type IconSvgProps } from '../icon-runtime';
import { MotionSvgRoot } from '../icon-runtime';

const animations = {
    default: {
        leftRect: {
            initial: {
                x: 0,
                transition: { ease: 'easeInOut', duration: 0.3 },
            },
            animate: {
                x: -2,
                transition: { ease: 'easeInOut', duration: 0.3 },
            },
        },
        rightRect: {
            initial: {
                x: 0,
                transition: { ease: 'easeInOut', duration: 0.3 },
            },
            animate: {
                x: 2,
                transition: { ease: 'easeInOut', duration: 0.3 },
            },
        },
        arrow: {
            initial: {
                y: 0,
                transition: { ease: 'easeInOut', duration: 0.3 },
            },
            animate: {
                y: 3,
                transition: { ease: 'easeInOut', duration: 0.3 },
            },
        },
    } satisfies Record<string, Variants>,
    'default-loop': {
        leftRect: {
            initial: { x: 0 },
            animate: {
                x: [0, -2, 0],
                transition: { ease: 'easeInOut', duration: 0.6 },
            },
        },
        rightRect: {
            initial: { x: 0 },
            animate: {
                x: [0, 2, 0],
                transition: { ease: 'easeInOut', duration: 0.6 },
            },
        },
        arrow: {
            initial: { y: 0 },
            animate: {
                y: [0, 3, 0],
                transition: { ease: 'easeInOut', duration: 0.6 },
            },
        },
    } satisfies Record<string, Variants>,
} as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 useSequenceDriver(register, ['animate'], 'initial', controls);
 return (<MotionSvgRoot  style={{ color }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" >
      <motion.rect width={7} height={13} x={3} y={8} rx={1} variants={(animations.default as Record<string, Variants>).leftRect} initial="initial" animate={controls}/>
      <motion.path d="m15 2-3 3-3-3" variants={(animations.default as Record<string, Variants>).arrow} initial="initial" animate={controls}/>
      <motion.rect width={7} height={13} x={14} y={8} rx={1} variants={(animations.default as Record<string, Variants>).rightRect} initial="initial" animate={controls}/>
    </MotionSvgRoot>);
}
