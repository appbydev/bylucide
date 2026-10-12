'use client';
import * as React from 'react';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';

const animations = {
    default: {
        group: {
            initial: { rotate: 0 },
            animate: {
                rotate: 360,
                transition: {
                    duration: 2,
                    ease: 'linear',
                    repeat: Infinity,
                    repeatType: 'loop',
                },
            },
        },
        circle1: {},
        circle2: {},
        path1: {},
        path2: {},
    } satisfies Record<string, Variants>,
} as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 const current = React.useRef(controls); current.current = controls;
 React.useLayoutEffect(() => { register({ async play(signal) { if (!signal.aborted) await current.current.start('animate'); }, reset() { current.current.stop(); current.current.set('initial'); } }); return () => register(null); }, [register]);
 return (<motion.svg  style={{ color }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" variants={(animations.default as Record<string, Variants>).group} initial="initial" animate={controls} >
      <motion.path d="M20.341 6.484A10 10 0 0 1 10.266 21.85" variants={(animations.default as Record<string, Variants>).path1} initial="initial" animate={controls}/>
      <motion.path d="M3.659 17.516A10 10 0 0 1 13.74 2.152" variants={(animations.default as Record<string, Variants>).path2} initial="initial" animate={controls}/>
      <motion.circle cx="12" cy="12" r="3" variants={(animations.default as Record<string, Variants>).circle1} initial="initial" animate={controls}/>
      <motion.circle cx="19" cy="5" r="2" variants={(animations.default as Record<string, Variants>).circle2} initial="initial" animate={controls}/>
      <motion.circle cx="5" cy="19" r="2" variants={(animations.default as Record<string, Variants>).circle3} initial="initial" animate={controls}/>
    </motion.svg>);
}
