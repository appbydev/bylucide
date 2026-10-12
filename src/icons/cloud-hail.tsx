'use client';
import * as React from 'react';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
const hailAnimation: Variants = {
    initial: { opacity: 1 },
    animate: (i: number = 0) => ({
        opacity: [1, 0.4, 1],
        transition: {
            duration: 1.2,
            ease: 'easeInOut',
            repeat: Infinity,
            delay: i * 0.2,
        },
    }),
};
const animations = {
    default: {
        group: {
            initial: {},
            animate: {},
        },
        path1: {},
        path2: hailAnimation,
        path3: hailAnimation,
        path4: hailAnimation,
        path5: hailAnimation,
        path6: hailAnimation,
        path7: hailAnimation,
    } satisfies Record<string, Variants>,
} as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 const current = React.useRef(controls); current.current = controls;
 React.useLayoutEffect(() => { register({ async play(signal) { if (!signal.aborted) await current.current.start('animate'); }, reset() { current.current.stop(); current.current.set('initial'); } }); return () => register(null); }, [register]);
 return (<motion.svg  style={{ color }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" initial="initial" animate={controls} >
      <motion.path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" variants={(animations.default as Record<string, Variants>).path1} initial="initial" animate={controls}/>
      <motion.g variants={(animations.default as Record<string, Variants>).group} initial="initial" animate={controls}>
        <motion.path d="M8 14v2" variants={(animations.default as Record<string, Variants>).path2} custom={0}/>
        <motion.path d="M12 22h.01" variants={(animations.default as Record<string, Variants>).path3} custom={1}/>
        <motion.path d="M16 14v2" variants={(animations.default as Record<string, Variants>).path4} custom={2}/>
        <motion.path d="M12 16v2" variants={(animations.default as Record<string, Variants>).path7} custom={3}/>
        <motion.path d="M16 20h.01" variants={(animations.default as Record<string, Variants>).path6} custom={4}/>
        <motion.path d="M8 20h.01" variants={(animations.default as Record<string, Variants>).path5} custom={5}/>
      </motion.g>
    </motion.svg>);
}
