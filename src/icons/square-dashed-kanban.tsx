'use client';
import * as React from 'react';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';

const animations = {
    default: {
        path1: {},
        path2: {},
        path3: {},
        path4: {},
        path5: {},
        path6: {},
        path7: {},
        path8: {},
        path9: {},
        path10: {},
        path11: {},
        path12: {},
        line1: {
            initial: {
                y2: 16,
            },
            animate: {
                y2: [16, 11, 14, 16],
                transition: { duration: 0.6, ease: 'linear' },
            },
        },
        line2: {
            initial: {
                y2: 11,
            },
            animate: {
                y2: [11, 14, 16, 11],
                transition: { duration: 0.6, ease: 'linear' },
            },
        },
        line3: {
            initial: {
                y2: 14,
            },
            animate: {
                y2: [14, 16, 11, 14],
                transition: { duration: 0.6, ease: 'linear' },
            },
        },
    } satisfies Record<string, Variants>,
} as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 const current = React.useRef(controls); current.current = controls;
 React.useLayoutEffect(() => { register({ async play(signal) { if (!signal.aborted) await current.current.start('animate'); }, reset() { current.current.stop(); current.current.set('initial'); } }); return () => register(null); }, [register]);
 return (<motion.svg  style={{ color }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" >
      <motion.path d="M5 3a2 2 0 0 0-2 2" variants={(animations.default as Record<string, Variants>).path1} initial="initial" animate={controls}/>
      <motion.path d="M9 3h1" variants={(animations.default as Record<string, Variants>).path2} initial="initial" animate={controls}/>
      <motion.path d="M14 3h1" variants={(animations.default as Record<string, Variants>).path3} initial="initial" animate={controls}/>
      <motion.path d="M19 3a2 2 0 0 1 2 2" variants={(animations.default as Record<string, Variants>).path4} initial="initial" animate={controls}/>
      <motion.path d="M21 9v1" variants={(animations.default as Record<string, Variants>).path5} initial="initial" animate={controls}/>
      <motion.path d="M21 14v1" variants={(animations.default as Record<string, Variants>).path6} initial="initial" animate={controls}/>
      <motion.path d="M21 19a2 2 0 0 1-2 2" variants={(animations.default as Record<string, Variants>).path7} initial="initial" animate={controls}/>
      <motion.path d="M14 21h1" variants={(animations.default as Record<string, Variants>).path8} initial="initial" animate={controls}/>
      <motion.path d="M9 21h1" variants={(animations.default as Record<string, Variants>).path9} initial="initial" animate={controls}/>
      <motion.path d="M5 21a2 2 0 0 1-2-2" variants={(animations.default as Record<string, Variants>).path10} initial="initial" animate={controls}/>
      <motion.path d="M3 14v1" variants={(animations.default as Record<string, Variants>).path11} initial="initial" animate={controls}/>
      <motion.path d="M3 9v1" variants={(animations.default as Record<string, Variants>).path12} initial="initial" animate={controls}/>
      <motion.line x1={16} y1={7} x2={16} y2={16} variants={(animations.default as Record<string, Variants>).line1} initial="initial" animate={controls}/>
      <motion.line x1={12} y1={7} x2={12} y2={11} variants={(animations.default as Record<string, Variants>).line2} initial="initial" animate={controls}/>
      <motion.line x1={8} y1={7} x2={8} y2={14} variants={(animations.default as Record<string, Variants>).line3} initial="initial" animate={controls}/>
    </motion.svg>);
}
