'use client';
import { motion, useAnimation, type Transition } from 'motion/react';
import type { IconSvgProps } from '../icon-runtime';
import { SvgRoot } from '../icon-runtime';
import { useControlsDriver } from '../icon-runtime';

const DEFAULT_TRANSITION: Transition = {
    type: "spring",
    velocity: 0,
    stiffness: 160,
    damping: 17,
    mass: 1,
};
export default function IconSvg({ size, color, strokeWidth, register }: IconSvgProps) {
 const controls = useAnimation();
 
 useControlsDriver(register, controls);
 return (<SvgRoot  style={{ color }} fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">
        <motion.rect animate={controls} height="6" rx="2" transition={DEFAULT_TRANSITION} variants={{
        normal: { scaleY: 1 },
        animate: { scaleY: 0.8 },
    }} width="10" x="7" y="9"/>
        <motion.path animate={controls} d="M22 20H2" transition={DEFAULT_TRANSITION} variants={{
        normal: { translateY: 0, scaleX: 1 },
        animate: {
            translateY: -2,
            scaleX: 0.9,
        },
    }}/>
        <motion.path animate={controls} d="M22 4H2" transition={DEFAULT_TRANSITION} variants={{
        normal: { translateY: 0, scaleX: 1 },
        animate: {
            translateY: 2,
            scaleX: 0.9,
        },
    }}/>
      </SvgRoot>);
}
