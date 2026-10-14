'use client';
import * as React from 'react';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';

const animations = {
    default: (() => {
        const animation: Record<string, Variants> = {
            rect: {},
        };
        for (let i = 1; i <= 2; i++) {
            animation[`path${i}`] = {
                initial: { opacity: 1, scale: 1, x: 0 },
                animate: {
                    opacity: [0, 1],
                    scale: [0.8, 1],
                    x: [4 * Math.pow(-1, i + 1), 0],
                    transition: {
                        type: 'spring',
                        velocity: 0,
                        stiffness: 150,
                        damping: 15,
                    },
                },
            };
        }
        return animation;
    })() satisfies Record<string, Variants>,
    zoom: (() => {
        const animation: Record<string, Variants> = {
            rect: {
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
                        },
                        scale: {
                            duration: 0.2,
                            ease: 'easeInOut',
                            repeat: 1,
                            repeatType: 'reverse',
                            repeatDelay: 0.2,
                        },
                    },
                },
            },
        };
        for (let i = 1; i <= 2; i++) {
            animation[`path${i}`] = {
                initial: { opacity: 1, transform: 'translateX(0) scale(1)' },
                animate: {
                    opacity: 0,
                    transform: `translateX(${8 * Math.pow(-1, i + 1)}px) scale(0)`,
                    transition: {
                        transform: {
                            duration: 0.2,
                            ease: 'easeInOut',
                            repeat: 1,
                            repeatType: 'reverse',
                            repeatDelay: 0.4,
                        },
                        opacity: {
                            duration: 0.2,
                            ease: 'easeInOut',
                            repeat: 1,
                            repeatType: 'reverse',
                            repeatDelay: 0.4,
                        },
                        scale: {
                            duration: 0.2,
                            ease: 'easeInOut',
                            repeat: 1,
                            repeatType: 'reverse',
                            repeatDelay: 0.4,
                        },
                    },
                },
            };
        }
        return animation;
    })() satisfies Record<string, Variants>,
    collapse: {
        rect: {},
        path1: {
            initial: { x: 0, scaleY: 1 },
            animate: {
                x: 4,
                scaleY: 0.8,
                transition: {
                    duration: 0.3,
                    ease: 'easeInOut',
                },
            },
        },
        path2: {
            initial: { x: 0, scaleY: 1 },
            animate: {
                x: -4,
                scaleY: 0.8,
                transition: {
                    duration: 0.3,
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
      <motion.path d="M2 3v18" variants={(animations.default as Record<string, Variants>).path1} initial="initial" animate={controls}/>
      <motion.rect width="12" height="18" x="6" y="3" rx="2" variants={(animations.default as Record<string, Variants>).rect} initial="initial" animate={controls}/>
      <motion.path d="M22 3v18" variants={(animations.default as Record<string, Variants>).path2} initial="initial" animate={controls}/>
    </motion.svg>);
}
