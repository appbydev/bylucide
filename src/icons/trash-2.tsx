'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import { useSequenceDriver, type IconSvgProps } from '../icon-runtime';

const animations = {
    default: {
        group: {
            initial: {
                y: 0,
            },
            animate: {
                y: -1,
                transition: {
                    duration: 0.3,
                    ease: 'easeInOut',
                },
            },
        },
        path1: {},
        path2: {},
        path3: {
            initial: {
                y: 0,
                d: 'M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6',
            },
            animate: {
                y: 1,
                d: 'M19 8v12c0 1-1 2-2 2H7c-1 0-2-1-2-2V8',
                transition: {
                    duration: 0.3,
                    ease: 'easeInOut',
                },
            },
        },
        line1: {
            initial: {
                y: 0,
            },
            animate: {
                y: 1,
                transition: {
                    duration: 0.3,
                    ease: 'easeInOut',
                },
            },
        },
        line2: {
            initial: {
                y: 0,
            },
            animate: {
                y: 1,
                transition: {
                    duration: 0.3,
                    ease: 'easeInOut',
                },
            },
        },
    } satisfies Record<string, Variants>,
} as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 useSequenceDriver(register, ['animate'], 'initial', controls);
 return (<motion.svg  style={{ color }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" >
      <motion.g variants={(animations.default as Record<string, Variants>).group} initial="initial" animate={controls}>
        <motion.path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" variants={(animations.default as Record<string, Variants>).path1} initial="initial" animate={controls}/>
        <motion.path d="M3 6h18" variants={(animations.default as Record<string, Variants>).path2} initial="initial" animate={controls}/>
      </motion.g>
      <motion.path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" variants={(animations.default as Record<string, Variants>).path3} initial="initial" animate={controls}/>
      <motion.line x1={10} x2={10} y1={11} y2={17} variants={(animations.default as Record<string, Variants>).line1} initial="initial" animate={controls}/>
      <motion.line x1={14} x2={14} y1={11} y2={17} variants={(animations.default as Record<string, Variants>).line2} initial="initial" animate={controls}/>
    </motion.svg>);
}
