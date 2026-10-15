'use client';
import { motion, useAnimation, type Variants } from 'motion/react';
import { useSequenceDriver, type IconSvgProps } from '../icon-runtime';
import { MotionSvgRoot } from '../icon-runtime';

const animations = {
    default: {
        group: {
            initial: {
                scale: 1,
            },
            animate: {
                scale: [1, 0.9, 1.2, 1],
                transition: { duration: 0.6, ease: 'easeInOut' },
            },
        },
        path: {},
    } satisfies Record<string, Variants>,
    fill: {
        group: {
            initial: {
                scale: 1,
            },
            animate: {
                scale: [1, 0.9, 1.2, 1],
                transition: { duration: 0.6, ease: 'easeInOut' },
            },
        },
        path: {
            initial: {
                fill: 'currentColor',
                fillOpacity: 0,
            },
            animate: {
                fillOpacity: 1,
                transition: { delay: 0.2 },
            },
        },
    } satisfies Record<string, Variants>,
} as const;
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 useSequenceDriver(register, ['animate'], 'initial', controls);
 return (<MotionSvgRoot  style={{ color }} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" variants={(animations.default as Record<string, Variants>).group} initial="initial" animate={controls} >
      <motion.path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" variants={(animations.default as Record<string, Variants>).path} initial="initial" animate={controls}/>
    </MotionSvgRoot>);
}
