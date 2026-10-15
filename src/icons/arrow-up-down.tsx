'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import { useSequenceDriver, type IconSvgProps } from '../icon-runtime';

const animations = {
    default: {
        upArrowGroup: {
            initial: {
                y: 0,
                transition: { ease: 'easeInOut', duration: 0.3 },
            },
            animate: {
                y: -3,
                transition: { ease: 'easeInOut', duration: 0.3 },
            },
        },
        downArrowGroup: {
            initial: {
                y: 0,
                transition: { ease: 'easeInOut', duration: 0.3 },
            },
            animate: {
                y: 3,
                transition: { ease: 'easeInOut', duration: 0.3 },
            },
        },
        upArrowLine: {},
        upArrowHead: {},
        downArrowLine: {},
        downArrowHead: {},
    } satisfies Record<string, Variants>,
    'default-loop': {
        upArrowGroup: {
            initial: {
                y: 0,
            },
            animate: {
                y: [0, -3, 0],
                transition: { ease: 'easeInOut', duration: 0.6 },
            },
        },
        downArrowGroup: {
            initial: {
                y: 0,
            },
            animate: {
                y: [0, 3, 0],
                transition: { ease: 'easeInOut', duration: 0.6 },
            },
        },
        upArrowLine: {},
        upArrowHead: {},
        downArrowLine: {},
        downArrowHead: {},
    } satisfies Record<string, Variants>,
    out: {
        upArrowGroup: {
            initial: {
                y: 0,
            },
            animate: {
                y: [0, -24, 24, 0],
                transition: {
                    default: { ease: 'easeInOut', duration: 0.6 },
                    y: {
                        ease: 'easeInOut',
                        duration: 0.6,
                        times: [0, 0.5, 0.5, 1],
                    },
                },
            },
        },
        downArrowGroup: {
            initial: {
                y: 0,
            },
            animate: {
                y: [0, 24, -24, 0],
                transition: {
                    default: { ease: 'easeInOut', duration: 0.6 },
                    y: {
                        ease: 'easeInOut',
                        duration: 0.6,
                        times: [0, 0.5, 0.5, 1],
                    },
                },
            },
        },
        upArrowLine: {},
        upArrowHead: {},
        downArrowLine: {},
        downArrowHead: {},
    } satisfies Record<string, Variants>,
} as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 useSequenceDriver(register, ['animate'], 'initial', controls);
 return (<motion.svg  style={{ color }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" >
      {/* Right Arrow (Down) */}
      <motion.g variants={(animations.default as Record<string, Variants>).downArrowGroup} initial="initial" animate={controls}>
        <motion.path d="m21 16-4 4-4-4" variants={(animations.default as Record<string, Variants>).downArrowHead} initial="initial" animate={controls}/>
        <motion.path d="M17 20V4" variants={(animations.default as Record<string, Variants>).downArrowLine} initial="initial" animate={controls}/>
      </motion.g>
      {/* Left Arrow (Up) */}
      <motion.g variants={(animations.default as Record<string, Variants>).upArrowGroup} initial="initial" animate={controls}>
        <motion.path d="m3 8 4-4 4 4" variants={(animations.default as Record<string, Variants>).upArrowHead} initial="initial" animate={controls}/>
        <motion.path d="M7 4v16" variants={(animations.default as Record<string, Variants>).upArrowLine} initial="initial" animate={controls}/>
      </motion.g>
    </motion.svg>);
}
