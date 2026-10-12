'use client';
import * as React from 'react';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';

const animations = {
    default: {
        group: {
            initial: {
                rotate: 0,
            },
            animate: {
                transformOrigin: 'bottom left',
                rotate: [0, 8, -8, 2, 0],
                transition: {
                    ease: 'easeInOut',
                    duration: 0.8,
                    times: [0, 0.4, 0.6, 0.8, 1],
                },
            },
        },
        path1: {},
        path2: {
            initial: {
                x: 0,
                y: 0,
            },
            animate: {
                x: [0, 1.5, 0],
                y: [0, -0.5, 0],
                transition: { duration: 0.6, ease: 'easeInOut' },
            },
        },
        path3: {
            initial: {
                x: 0,
                y: 0,
            },
            animate: {
                x: [0, 1, 0],
                y: [0, -0.5, 0],
                transition: { duration: 0.6, ease: 'easeInOut' },
            },
        },
    } satisfies Record<string, Variants>,
} as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 const current = React.useRef(controls); current.current = controls;
 React.useLayoutEffect(() => { register({ async play(signal) { if (!signal.aborted) await current.current.start('animate'); }, reset() { current.current.stop(); current.current.set('initial'); } }); return () => register(null); }, [register]);
 return (<motion.svg  style={{ color }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" >
      <motion.g variants={(animations.default as Record<string, Variants>).group} initial="initial" animate={controls}>
        <motion.path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" variants={(animations.default as Record<string, Variants>).path1} initial="initial" animate={controls}/>
        <motion.path d="M8 12a2 2 0 0 0 2-2V8H8" variants={(animations.default as Record<string, Variants>).path2} initial="initial" animate={controls}/>
        <motion.path d="M14 12a2 2 0 0 0 2-2V8h-2" variants={(animations.default as Record<string, Variants>).path3} initial="initial" animate={controls}/>
      </motion.g>
    </motion.svg>);
}
