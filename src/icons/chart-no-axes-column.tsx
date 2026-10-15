'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import { useSequenceDriver, type IconSvgProps } from '../icon-runtime';

const animations = {
    default: (() => {
        const animation: Record<string, Variants> = {};
        for (let i = 1; i <= 3; i++) {
            animation[`path${i}`] = {
                initial: { opacity: 1 },
                animate: {
                    opacity: [0, 1],
                    pathLength: [0, 1],
                    transition: {
                        ease: 'easeInOut',
                        duration: 0.4,
                        delay: (i - 1) * 0.3,
                    },
                },
            };
        }
        return animation as Record<string, Variants>;
    })() satisfies Record<string, Variants>,
    'default-loop': (() => {
        const n = 3;
        const delayStep = 0.3;
        const segDuration = 0.4;
        const startOut = (i: number) => (n - i) * delayStep;
        const endOut = (i: number) => startOut(i) + segDuration;
        const outTotal = Math.max(...Array.from({ length: n }, (_, k) => endOut(k + 1)));
        const startIn = (i: number) => outTotal + (i - 1) * delayStep;
        const endIn = (i: number) => startIn(i) + segDuration;
        const totalDuration = Math.max(...Array.from({ length: n }, (_, k) => endIn(k + 1)));
        const animation: Record<string, Variants> = {};
        for (let i = 1; i <= n; i++) {
            const tSO = startOut(i) / totalDuration;
            const tEO = endOut(i) / totalDuration;
            const tSI = startIn(i) / totalDuration;
            const tEI = endIn(i) / totalDuration;
            animation[`path${i}`] = {
                initial: { opacity: 1, pathLength: 1 },
                animate: {
                    pathLength: [1, 1, 0, 0, 1],
                    opacity: [1, 1, 0, 0, 1],
                    transition: {
                        ease: 'easeInOut',
                        duration: totalDuration,
                        times: [0, tSO, tEO, tSI, tEI],
                    },
                },
            };
        }
        return animation as Record<string, Variants>;
    })() satisfies Record<string, Variants>,
    decreasing: {
        path1: {
            initial: { d: 'M5 21V15' },
            animate: {
                d: 'M5 21V15',
                transition: { duration: 0.5, ease: 'easeInOut' },
            },
        },
        path2: {
            initial: { d: 'M12 21V3' },
            animate: {
                d: 'M12 21V9',
                transition: { duration: 0.5, ease: 'easeInOut' },
            },
        },
        path3: {
            initial: { d: 'M19 21V9' },
            animate: {
                d: 'M19 21V3',
                transition: { duration: 0.5, ease: 'easeInOut' },
            },
        },
    } satisfies Record<string, Variants>,
    increasing: {
        path1: {
            initial: { d: 'M5 21V15' },
            animate: {
                d: 'M5 21V3',
                transition: { duration: 0.5, ease: 'easeInOut' },
            },
        },
        path2: {
            initial: { d: 'M12 21V3' },
            animate: {
                d: 'M12 21V9',
                transition: { duration: 0.5, ease: 'easeInOut' },
            },
        },
        path3: {
            initial: { d: 'M19 21V9' },
            animate: {
                d: 'M19 21V15',
                transition: { duration: 0.5, ease: 'easeInOut' },
            },
        },
    } satisfies Record<string, Variants>,
} as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 useSequenceDriver(register, ['animate'], 'initial', controls);
 return (<motion.svg  style={{ color }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" >
      <motion.path d="M5 21V15" variants={(animations.default as Record<string, Variants>).path1} initial="initial" animate={controls}/>
      <motion.path d="M12 21V3" variants={(animations.default as Record<string, Variants>).path2} initial="initial" animate={controls}/>
      <motion.path d="M19 21V9" variants={(animations.default as Record<string, Variants>).path3} initial="initial" animate={controls}/>
    </motion.svg>);
}
