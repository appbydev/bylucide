'use client';
import * as React from 'react';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';

const animations = {
    default: {
        path1: {
            initial: {
                rotate: 0,
                fill: 'transparent',
            },
            animate: {
                transformOrigin: 'bottom center',
                fill: 'currentColor',
                rotate: [0, -20, 15, -7, 0],
                fillOpacity: [0, 1, 0, 1, 0],
                transition: {
                    duration: 0.8,
                    ease: 'easeInOut',
                    rotate: {
                        duration: 0.8,
                        ease: 'easeInOut',
                        times: [0, 0.4, 0.6, 0.8, 1],
                    },
                    fillOpacity: {
                        duration: 0.3,
                        ease: 'easeInOut',
                        times: [0, 0.4, 0.6, 0.8, 1],
                        delay: 0.4,
                    },
                },
            },
        },
        path2: {
            initial: {
                rotate: 0,
            },
            animate: {
                transformOrigin: 'bottom center',
                rotate: [0, 0, 10, -5, 0],
                transition: {
                    duration: 0.8,
                    ease: 'easeInOut',
                    times: [0, 0.4, 0.6, 0.8, 1],
                },
            },
        },
        path3: {},
    } satisfies Record<string, Variants>,
} as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 const current = React.useRef(controls); current.current = controls;
 React.useLayoutEffect(() => { register({ async play(signal) { if (!signal.aborted) await current.current.start('animate'); }, reset() { current.current.stop(); current.current.set('initial'); } }); return () => register(null); }, [register]);
 return (<motion.svg  style={{ color }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" >
      <motion.path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" variants={(animations.default as Record<string, Variants>).path1} initial="initial" animate={controls}/>
      <motion.path d="M9 18h6" variants={(animations.default as Record<string, Variants>).path2} initial="initial" animate={controls}/>
      <motion.path d="M10 22h4" variants={(animations.default as Record<string, Variants>).path3} initial="initial" animate={controls}/>
    </motion.svg>);
}
