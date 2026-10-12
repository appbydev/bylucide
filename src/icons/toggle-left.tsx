'use client';
import * as React from 'react';
import { motion, useAnimation, type Variants } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';

const animations = {
    default: {
        rect: {},
        circle: {
            initial: {
                x: 0,
            },
            animate: {
                x: [0, 7, 6],
                transition: {
                    duration: 0.5,
                    ease: 'easeInOut',
                },
            },
        },
    } satisfies Record<string, Variants>,
    'default-loop': {
        rect: {},
        circle: {
            initial: {
                x: 0,
            },
            animate: {
                x: [0, 7, 6, -1, 0],
                transition: {
                    duration: 1,
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
      <motion.rect width={20} height={14} x={2} y={5} rx={7} variants={(animations.default as Record<string, Variants>).rect} initial="initial" animate={controls}/>
      <motion.circle cx={9} cy={12} r={3} variants={(animations.default as Record<string, Variants>).circle} initial="initial" animate={controls}/>
    </motion.svg>);
}
