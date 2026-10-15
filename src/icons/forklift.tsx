'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import { useSequenceDriver, type IconSvgProps } from '../icon-runtime';
import { MotionSvgRoot } from '../icon-runtime';

const animations = {
    default: {
        circle1: {},
        circle2: {},
        path1: {},
        path2: {},
        line: {
            initial: {
                y1: 19,
                y2: 19,
            },
            animate: {
                y1: [19, 5, 6],
                y2: [19, 5, 6],
                transition: {
                    duration: 0.8,
                    ease: 'easeInOut',
                },
            },
        },
    } satisfies Record<string, Variants>,
    'default-loop': {
        circle1: {},
        circle2: {},
        path1: {},
        path2: {},
        line: {
            initial: {
                y1: 19,
                y2: 19,
            },
            animate: {
                y1: [19, 5, 6, 19],
                y2: [19, 5, 6, 19],
                transition: {
                    duration: 1.2,
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
      <motion.path d="M12,12h-7c-1.1,0-2,.9-2,2v5" variants={(animations.default as Record<string, Variants>).path1} initial="initial" animate={controls}/>
      <motion.circle cx={13} cy={19} r={2} variants={(animations.default as Record<string, Variants>).circle1} initial="initial" animate={controls}/>
      <motion.circle cx={5} cy={19} r={2} variants={(animations.default as Record<string, Variants>).circle2} initial="initial" animate={controls}/>
      <motion.path d="M8,19h3M16,2v17M6,12v-5c0-1.1.9-2,2-2h3l5,5" variants={(animations.default as Record<string, Variants>).path2} initial="initial" animate={controls}/>
      <motion.line x1={22} y1={19} x2={16} y2={19} variants={(animations.default as Record<string, Variants>).line} initial="initial" animate={controls}/>
    </MotionSvgRoot>);
}
