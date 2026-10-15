'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import { useSequenceDriver, type IconSvgProps } from '../icon-runtime';
import { MotionSvgRoot } from '../icon-runtime';

const animations = {
    default: {
        group1: {
            initial: {
                y: 0,
                transition: { ease: 'easeInOut', duration: 0.3 },
            },
            animate: {
                y: '15%',
                transition: { ease: 'easeInOut', duration: 0.3 },
            },
        },
        group2: {},
        path1: {},
        path2: {},
    } satisfies Record<string, Variants>,
    'default-loop': {
        group1: {
            initial: {
                y: 0,
            },
            animate: {
                y: [0, '15%', 0],
                transition: { ease: 'easeInOut', duration: 0.6 },
            },
        },
        group2: {},
        path1: {},
        path2: {},
    } satisfies Record<string, Variants>,
    pointing: {
        group1: {},
        group2: {},
        path1: {
            initial: {
                d: 'M12 2V22',
                transition: { ease: 'easeInOut', duration: 0.3 },
            },
            animate: {
                d: 'M12 2V12',
                transition: { ease: 'easeInOut', duration: 0.3 },
            },
        },
        path2: {
            initial: {
                d: 'M8 18L12 22L16 18',
                transition: { ease: 'easeInOut', duration: 0.3 },
            },
            animate: {
                d: 'M8 8L12 12L16 8',
                transition: { ease: 'easeInOut', duration: 0.3 },
            },
        },
    } satisfies Record<string, Variants>,
    'pointing-loop': {
        group1: {},
        group2: {},
        path1: {
            initial: {
                d: 'M12 2V22',
            },
            animate: {
                d: ['M12 2V22', 'M12 2V12', 'M12 2V22'],
                transition: { ease: 'easeInOut', duration: 0.6 },
            },
        },
        path2: {
            initial: {
                d: 'M8 18L12 22L16 18',
            },
            animate: {
                d: ['M8 18L12 22L16 18', 'M8 8L12 12L16 8', 'M8 18L12 22L16 18'],
                transition: { ease: 'easeInOut', duration: 0.6 },
            },
        },
    } satisfies Record<string, Variants>,
    out: {
        group1: {},
        group2: {
            initial: {
                y: 0,
            },
            animate: {
                y: [0, '150%', '-150%', 0],
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
        path1: {},
        path2: {},
    } satisfies Record<string, Variants>,
} as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 useSequenceDriver(register, ['animate'], 'initial', controls);
 return (<MotionSvgRoot  style={{ color }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" variants={(animations.default as Record<string, Variants>).group1} initial="initial" animate={controls} >
      <motion.g variants={(animations.default as Record<string, Variants>).group2} initial="initial" animate={controls}>
        <motion.path d="M12 2V22" variants={(animations.default as Record<string, Variants>).path1} initial="initial" animate={controls}/>
        <motion.path d="M8 18L12 22L16 18" variants={(animations.default as Record<string, Variants>).path2} initial="initial" animate={controls}/>
      </motion.g>
    </MotionSvgRoot>);
}
