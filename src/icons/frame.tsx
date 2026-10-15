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
          <motion.line animate={controls} transition={DEFAULT_TRANSITION} variants={{
        animate: { translateY: -2 },
        normal: {
            translateX: 0,
            rotate: 0,
            translateY: 0,
        },
    }} x1={22} x2={2} y1={6} y2={6}/>
          <motion.line animate={controls} transition={DEFAULT_TRANSITION} variants={{
        animate: { translateY: 2 },
        normal: {
            translateX: 0,
            rotate: 0,
            translateY: 0,
        },
    }} x1={22} x2={2} y1={18} y2={18}/>
          <motion.line animate={controls} transition={DEFAULT_TRANSITION} variants={{
        animate: { translateX: -2 },
        normal: {
            translateX: 0,
            rotate: 0,
            translateY: 0,
        },
    }} x1={6} x2={6} y1={2} y2={22}/>
          <motion.line animate={controls} transition={DEFAULT_TRANSITION} variants={{
        animate: { translateX: 2 },
        normal: {
            translateX: 0,
            rotate: 0,
            translateY: 0,
        },
    }} x1={18} x2={18} y1={2} y2={22}/>
        </SvgRoot>);
}
