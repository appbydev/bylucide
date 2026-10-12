'use client';
import * as React from 'react';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';

const animations = {
    default: {
        rect1: {
            initial: {
                height: 9,
                transition: { duration: 0.3, ease: 'easeInOut' },
            },
            animate: {
                height: 5,
                transition: { duration: 0.3, ease: 'easeInOut' },
            },
        },
        rect2: {
            initial: {
                height: 5,
                transition: { duration: 0.3, ease: 'easeInOut' },
            },
            animate: {
                height: 9,
                transition: { duration: 0.3, ease: 'easeInOut' },
            },
        },
        rect3: {
            initial: {
                height: 9,
                y: 0,
                transition: { duration: 0.3, ease: 'easeInOut' },
            },
            animate: {
                height: 5,
                y: 4,
                transition: { duration: 0.3, ease: 'easeInOut' },
            },
        },
        rect4: {
            initial: {
                height: 5,
                y: 0,
                transition: { duration: 0.3, ease: 'easeInOut' },
            },
            animate: {
                height: 9,
                y: -4,
                transition: { duration: 0.3, ease: 'easeInOut' },
            },
        },
    } satisfies Record<string, Variants>,
    'default-loop': {
        rect1: {
            initial: {
                height: 9,
            },
            animate: {
                height: [9, 5, 9],
                transition: { duration: 0.6, ease: 'easeInOut' },
            },
        },
        rect2: {
            initial: {
                height: 5,
            },
            animate: {
                height: [5, 9, 5],
                transition: { duration: 0.6, ease: 'easeInOut' },
            },
        },
        rect3: {
            initial: {
                height: 9,
                y: 0,
            },
            animate: {
                height: [9, 5, 9],
                y: [0, 4, 0],
                transition: { duration: 0.6, ease: 'easeInOut' },
            },
        },
        rect4: {
            initial: {
                height: 5,
                y: 0,
            },
            animate: {
                height: [5, 9, 5],
                y: [0, -4, 0],
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
      <motion.rect width={7} height={9} x={3} y={3} rx={1} ry={1} variants={(animations.default as Record<string, Variants>).rect1} initial="initial" animate={controls}/>
      <motion.rect width={7} height={5} x={14} y={3} rx={1} ry={1} variants={(animations.default as Record<string, Variants>).rect2} initial="initial" animate={controls}/>
      <motion.rect width={7} height={9} x={14} y={12} rx={1} ry={1} variants={(animations.default as Record<string, Variants>).rect3} initial="initial" animate={controls}/>
      <motion.rect width={7} height={5} x={3} y={16} rx={1} ry={1} variants={(animations.default as Record<string, Variants>).rect4} initial="initial" animate={controls}/>
    </motion.svg>);
}
