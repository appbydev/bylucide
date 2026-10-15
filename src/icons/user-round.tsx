'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import { useSequenceDriver, type IconSvgProps } from '../icon-runtime';
import { MotionSvgRoot } from '../icon-runtime';

const animations = {
    default: {
        path: {
            initial: {
                y: 0,
            },
            animate: {
                y: [0, 4, -2, 0],
                transition: {
                    duration: 0.6,
                    ease: 'easeInOut',
                },
            },
        },
        circle: {
            initial: {
                y: 0,
            },
            animate: {
                y: [0, 1, -2, 0],
                transition: {
                    duration: 0.6,
                    ease: 'easeInOut',
                },
            },
        },
    } satisfies Record<string, Variants>,
} as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 useSequenceDriver(register, ['animate'], 'initial', controls);
 return (<MotionSvgRoot  style={{ color }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" >
      <motion.path d="M20 21a8 8 0 0 0-16 0" variants={(animations.default as Record<string, Variants>).path} initial="initial" animate={controls}/>
      <motion.circle cx={12} cy={8} r={5} variants={(animations.default as Record<string, Variants>).circle} initial="initial" animate={controls}/>
    </MotionSvgRoot>);
}
