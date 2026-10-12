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
        path: {},
        circle: {
            initial: {
                x: 0,
                y: 0,
            },
            animate: {
                x: [0, -2, 0],
                y: [0, 2, 0],
                transition: {
                    ease: 'easeInOut',
                    duration: 0.6,
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
      <motion.g variants={(animations.default as Record<string, Variants>).group} initial="initial" animate={controls}>
        <motion.path d="M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7" variants={(animations.default as Record<string, Variants>).path} initial="initial" animate={controls}/>
        <motion.circle cx="18" cy="6" r="3" variants={(animations.default as Record<string, Variants>).circle} initial="initial" animate={controls}/>
      </motion.g>
    </motion.svg>);
}
