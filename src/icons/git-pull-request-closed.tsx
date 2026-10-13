'use client';
import { motion, useAnimation } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const DURATION = 0.3;
const CALCULATE_DELAY = (i: number) => {
    if (i === 0)
        return 0.1;
    return i * DURATION + 0.1;
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<svg  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <motion.circle animate={controls} cx="6" cy="6" r="3" transition={{
        duration: DURATION,
        delay: CALCULATE_DELAY(0),
        opacity: { delay: CALCULATE_DELAY(0) },
    }} variants={{
        normal: { pathLength: 1, opacity: 1, transition: { delay: 0 } },
        animate: {
            pathLength: [0, 1],
            opacity: [0, 1],
        },
    }}/>

        <motion.path animate={controls} d="M6 9v12" transition={{
        duration: DURATION,
        delay: CALCULATE_DELAY(1),
        opacity: { delay: CALCULATE_DELAY(1) },
    }} variants={{
        normal: {
            pathLength: 1,
            pathOffset: 0,
            opacity: 1,
            transition: { delay: 0 },
        },
        animate: {
            pathLength: [0, 1],
            opacity: [0, 1],
            pathOffset: [1, 0],
        },
    }}/>

        <motion.path animate={controls} d="m21 3-6 6" transition={{
        duration: DURATION,
        delay: CALCULATE_DELAY(2),
        opacity: { delay: CALCULATE_DELAY(2) },
    }} variants={{
        normal: { opacity: 1, transition: { delay: 0 } },
        animate: { opacity: [0, 1] },
    }}/>

        <motion.path animate={controls} d="m21 9-6-6" transition={{
        duration: DURATION,
        delay: CALCULATE_DELAY(2),
        opacity: { delay: CALCULATE_DELAY(2) },
    }} variants={{
        normal: { opacity: 1, transition: { delay: 0 } },
        animate: { opacity: [0, 1] },
    }}/>

        <motion.path animate={controls} d="M18 11.5V15" transition={{
        duration: DURATION,
        delay: CALCULATE_DELAY(3),
        opacity: { delay: CALCULATE_DELAY(3) },
    }} variants={{
        normal: {
            pathLength: 1,
            pathOffset: 0,
            opacity: 1,
            transition: { delay: 0 },
        },
        animate: {
            pathLength: [0, 1],
            opacity: [0, 1],
            pathOffset: [1, 0],
        },
    }}/>

        <motion.circle animate={controls} cx="18" cy="18" r="3" transition={{
        duration: DURATION,
        delay: CALCULATE_DELAY(4),
        opacity: { delay: CALCULATE_DELAY(4) },
    }} variants={{
        normal: { pathLength: 1, opacity: 1, transition: { delay: 0 } },
        animate: {
            pathLength: [0, 1],
            opacity: [0, 1],
        },
    }}/>
      </svg>);
}
