'use client';
import * as React from 'react';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
const rainAnimation: Variants = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: [1, 0.4, 1],
        transition: {
            duration: 0.8,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
};
const animations = {
    default: (() => {
        const animation: Record<string, Variants> = {
            path1: {},
            path2: {},
            group: {
                animate: {
                    transition: {
                        staggerChildren: 0.3,
                    },
                },
            },
            path3: rainAnimation,
            path4: rainAnimation,
        };
        for (let i = 1; i <= 4; i++) {
            animation[`line${i}`] = {
                initial: { opacity: 1, scale: 1 },
                animate: {
                    opacity: [0, 1],
                    pathLength: [0, 1],
                    transition: {
                        duration: 0.6,
                        ease: 'easeInOut',
                        delay: (i - 1) * 0.15,
                    },
                },
            };
        }
        return animation;
    })() satisfies Record<string, Variants>,
} as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 const current = React.useRef(controls); current.current = controls;
 React.useLayoutEffect(() => { register({ async play(signal) { if (!signal.aborted) await current.current.start('animate'); }, reset() { current.current.stop(); current.current.set('initial'); } }); return () => register(null); }, [register]);
 return (<motion.svg  style={{ color }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" initial="initial" animate={controls} >
      <motion.path d="M15.947 12.65a4 4 0 0 0-5.925-4.128" variants={(animations.default as Record<string, Variants>).path1} initial="initial" animate={controls}/>
      <motion.path d="M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24" variants={(animations.default as Record<string, Variants>).path2} initial="initial" animate={controls}/>

      <motion.g variants={(animations.default as Record<string, Variants>).group} initial="initial" animate={controls}>
        <motion.path d="M7 19v2" variants={(animations.default as Record<string, Variants>).path3}/>
        <motion.path d="M11 20v2" variants={(animations.default as Record<string, Variants>).path4}/>
      </motion.g>

      <motion.line x1="6.3" y1="6.3" x2="4.9" y2="4.9" variants={(animations.default as Record<string, Variants>).line1} initial="initial" animate={controls}/>
      <motion.line x1="12" y1="4" x2="12" y2="2" variants={(animations.default as Record<string, Variants>).line2} initial="initial" animate={controls}/>
      <motion.line x1="17.7" y1="6.3" x2="19.1" y2="4.9" variants={(animations.default as Record<string, Variants>).line3} initial="initial" animate={controls}/>
      <motion.line x1="20" y1="12" x2="22" y2="12" variants={(animations.default as Record<string, Variants>).line4} initial="initial" animate={controls}/>
    </motion.svg>);
}
