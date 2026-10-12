'use client';
import * as React from 'react';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';

const animations = {
    default: {
        path1: {
            initial: {
                y: 0,
            },
            animate: {
                y: 4,
                transition: {
                    duration: 0.3,
                    ease: 'easeInOut',
                },
            },
        },
        path2: {
            initial: {
                y: 0,
            },
            animate: {
                y: -4,
                transition: {
                    duration: 0.3,
                    ease: 'easeInOut',
                },
            },
        },
    } satisfies Record<string, Variants>,
    'default-loop': {
        path1: {
            initial: {
                y: 0,
            },
            animate: {
                y: [0, 4, 0],
                transition: {
                    duration: 0.6,
                    ease: 'easeInOut',
                },
            },
        },
        path2: {
            initial: {
                y: 0,
            },
            animate: {
                y: [0, -4, 0],
                transition: {
                    duration: 0.6,
                    ease: 'easeInOut',
                },
            },
        },
    } satisfies Record<string, Variants>,
} as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 const current = React.useRef(controls); current.current = controls;
 React.useLayoutEffect(() => { register({ async play(signal) { if (!signal.aborted) await current.current.start('animate'); }, reset() { current.current.stop(); current.current.set('initial'); } }); return () => register(null); }, [register]);
 return (<motion.svg  style={{ color }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" >
      <motion.path d="M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74z" variants={(animations.default as Record<string, Variants>).path1} initial="initial" animate={controls}/>
      <motion.path d="m20 14.285 1.5.845a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74l1.5-.845" variants={(animations.default as Record<string, Variants>).path2} initial="initial" animate={controls}/>
    </motion.svg>);
}
