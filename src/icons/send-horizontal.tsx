'use client';
import * as React from 'react';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';

const animations = {
    default: {
        group: {
            initial: {
                scale: 1,
                x: 0,
            },
            animate: {
                scale: [1, 0.8, 1, 1, 1],
                x: [0, '-10%', '125%', '-150%', 0],
                transition: {
                    default: { ease: 'easeInOut', duration: 1.2 },
                    x: {
                        ease: 'easeInOut',
                        duration: 1.2,
                        times: [0, 0.25, 0.5, 0.5, 1],
                    },
                },
            },
        },
        path1: {},
        path2: {},
    } satisfies Record<string, Variants>,
} as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 const current = React.useRef(controls); current.current = controls;
 React.useLayoutEffect(() => { register({ async play(signal) { if (!signal.aborted) await current.current.start('animate'); }, reset() { current.current.stop(); current.current.set('initial'); } }); return () => register(null); }, [register]);
 return (<motion.svg  style={{ color }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" >
      <motion.g variants={(animations.default as Record<string, Variants>).group} initial="initial" animate={controls}>
        <motion.path d="M3.7,3c-.2-.1-.5,0-.7.2,0,.1,0,.3,0,.4l2.8,7.6c.2.5.2.9,0,1.4l-2.8,7.6c0,.3,0,.5.3.6.1,0,.3,0,.4,0l18-8.5c.2-.1.4-.4.2-.7,0-.1-.1-.2-.2-.2L3.7,3Z" variants={(animations.default as Record<string, Variants>).path1} initial="initial" animate={controls}/>
        <motion.path d="M6,12h16" variants={(animations.default as Record<string, Variants>).path2} initial="initial" animate={controls}/>
      </motion.g>
    </motion.svg>);
}
