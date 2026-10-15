'use client';
import { motion, useAnimation, type Variants, type Transition } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { SvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const CIRCLE_TRANSITION: Transition = {
    duration: 0.3,
    delay: 0.1,
    opacity: { delay: 0.15 },
};
const CIRCLE_VARIANTS: Variants = {
    normal: {
        pathLength: 1,
        opacity: 1,
    },
    animate: {
        pathLength: [0, 1],
        opacity: [0, 1],
    },
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<SvgRoot  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
          <motion.circle animate={controls} cx="6" cy="19" r="3" transition={CIRCLE_TRANSITION} variants={CIRCLE_VARIANTS}/>
          <motion.path animate={controls} d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" transition={{ duration: 0.7, delay: 0.5, opacity: { delay: 0.5 } }} variants={{
        normal: {
            pathLength: 1,
            opacity: 1,
            pathOffset: 0,
        },
        animate: {
            pathLength: [0, 1],
            opacity: [0, 1],
            pathOffset: [1, 0],
        },
    }}/>
          <motion.circle animate={controls} cx="18" cy="5" r="3" transition={CIRCLE_TRANSITION} variants={CIRCLE_VARIANTS}/>
        </SvgRoot>);
}
