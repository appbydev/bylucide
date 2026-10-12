'use client';
import * as React from 'react';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';

const animations = {
    default: {
        path1: {
            initial: {
                pathLength: 1,
                opacity: 1,
                scale: 1,
            },
            animate: {
                pathLength: [0, 1],
                opacity: [0, 1],
                scale: [1, 1.1, 1],
                transition: {
                    duration: 0.6,
                    ease: 'easeInOut',
                },
            },
        },
        path2: {},
    } satisfies Record<string, Variants>,
} as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 const current = React.useRef(controls); current.current = controls;
 React.useLayoutEffect(() => { register({ async play(signal) { if (!signal.aborted) await current.current.start('animate'); }, reset() { current.current.stop(); current.current.set('initial'); } }); return () => register(null); }, [register]);
 return (<motion.svg  style={{ color }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" initial="initial" animate={controls} >
      <motion.path d="m4 10 5 5L20 4" variants={(animations.default as Record<string, Variants>).path1} initial="initial" animate={controls}/>
      <motion.path d="M21,19H3" variants={(animations.default as Record<string, Variants>).path2} initial="initial" animate={controls}/>
    </motion.svg>);
}
