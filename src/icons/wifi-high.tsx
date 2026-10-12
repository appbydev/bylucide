'use client';
import * as React from 'react';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';

const animations = {
    default: (() => {
        const animation: Record<string, Variants> = {};
        for (let i = 1; i <= 3; i++) {
            animation[`path${i}`] = {
                initial: { opacity: 1, scale: 1 },
                animate: {
                    opacity: 0,
                    scale: 0,
                    transition: {
                        opacity: {
                            duration: 0.2,
                            ease: 'easeInOut',
                            repeat: 1,
                            repeatType: 'reverse',
                            repeatDelay: 0.2,
                            delay: 0.2 * (i - 1),
                        },
                        scale: {
                            duration: 0.2,
                            ease: 'easeInOut',
                            repeat: 1,
                            repeatType: 'reverse',
                            repeatDelay: 0.2,
                            delay: 0.2 * (i - 1),
                        },
                    },
                },
            };
        }
        return animation;
    })() satisfies Record<string, Variants>,
} as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 const current = React.useRef(controls); current.current = controls;
 React.useLayoutEffect(() => { register({ async play(signal) { if (!signal.aborted) await current.current.start('animate'); }, reset() { current.current.stop(); current.current.set('initial'); } }); return () => register(null); }, [register]);
 return (<motion.svg  style={{ color }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" >
      <motion.path d="M12 20h.01" variants={(animations.default as Record<string, Variants>).path1} initial="initial" animate={controls}/>
      <motion.path d="M8.5 16.429a5 5 0 0 1 7 0" variants={(animations.default as Record<string, Variants>).path2} initial="initial" animate={controls}/>
      <motion.path d="M5 12.859a10 10 0 0 1 14 0" variants={(animations.default as Record<string, Variants>).path3} initial="initial" animate={controls}/>
    </motion.svg>);
}
